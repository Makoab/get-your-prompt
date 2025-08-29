// Background script for context menu and API calls

// Function to get the stored API key
async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['geminiApiKey'], (result) => {
      resolve(result.geminiApiKey);
    });
  });
}

// Function to call the Gemini API
async function callGeminiAPI(originalText, apiKey) {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an expert prompt crafter, specializing in transforming simple user ideas into rich, detailed, and actionable instructions for advanced AI models.

Your task is to take the user's raw text and re-engineer it into a superior prompt. Follow this process:
1.  **Analyze Intent**: First, deeply analyze the core intent behind the user's text. What is their ultimate goal?
2.  **Enrich and Specify**: Add critical details the user might have missed. This includes defining the target **audience**, the desired **tone** (e.g., formal, casual, witty), and key **context**.
3.  **Structure the Output**: Suggest a specific output **format** that would best suit the request (e.g., a bulleted list, a table, JSON, a step-by-step guide, a specific number of paragraphs).
4.  **Incorporate Constraints**: Add clear constraints to focus the AI. This includes specifying what to do and, just as importantly, what to **avoid** (negative constraints).
5.  **Ensure Clarity**: The final prompt must be clear, unambiguous, and self-contained, providing the AI with everything it needs to deliver a high-quality response.

User's Idea: "${originalText}"

Your final output must be ONLY the enhanced prompt text, without any introductory phrases or explanations.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(`API request failed: ${response.status}. ${errorData.error?.message || ''}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}

// Create the context menu item upon installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "get-your-prompt",
    title: "Get Your Prompt",
    contexts: ["selection"]
  });
});

// Listener for when the context menu item is clicked
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "get-your-prompt" && info.selectionText) {
    const apiKey = await getApiKey();

    if (!apiKey) {
      // Inform the user they need to set an API key
      chrome.tabs.sendMessage(tab.id, {
        type: 'SHOW_ERROR',
        message: 'API Key not set. Please click the extension icon to set your Gemini API key.'
      });
      return;
    }

    try {
      // Notify the content script that we are starting
      chrome.tabs.sendMessage(tab.id, { type: 'PROMPT_GENERATION_START' });

      const enhancedPrompt = await callGeminiAPI(info.selectionText, apiKey);
      
      // Send the successful result to the content script
      chrome.tabs.sendMessage(tab.id, {
        type: 'SHOW_PROMPT_RESULT',
        prompt: enhancedPrompt
      });

    } catch (error) {
      // Send an error message to the content script
      chrome.tabs.sendMessage(tab.id, {
        type: 'SHOW_ERROR',
        message: `Failed to generate prompt. Please check your API key and network connection. Error: ${error.message}`
      });
    }
  }
});