// Popup script for managing API key and settings
document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('apiKeyInput');
  const saveApiKeyBtn = document.getElementById('saveApiKey');
  const clearApiKeyBtn = document.getElementById('clearApiKey');
  const apiStatus = document.getElementById('apiStatus');

  // Load existing API key
  chrome.storage.sync.get(['geminiApiKey'], function(result) {
    if (result.geminiApiKey) {
      apiKeyInput.value = '••••••••••••••••'; // Mask the key
      showStatus('API key is configured', 'success');
    }
  });

  // Save API key
  saveApiKeyBtn.addEventListener('click', function() {
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
      showStatus('Please enter an API key', 'error');
      return;
    }

    // Don't save if it's the masked version
    if (apiKey === '••••••••••••••••') {
      showStatus('API key is already saved', 'success');
      return;
    }

    // Basic validation - Gemini API keys typically start with 'AIza'
    if (!apiKey.startsWith('AIza')) {
      showStatus('Invalid API key format. Gemini keys start with "AIza"', 'error');
      return;
    }

    // Test the API key
    testApiKey(apiKey).then(isValid => {
      if (isValid) {
        chrome.storage.sync.set({ geminiApiKey: apiKey }, function() {
          if (chrome.runtime.lastError) {
            showStatus('Failed to save API key', 'error');
          } else {
            apiKeyInput.value = '••••••••••••••••';
            showStatus('API key saved successfully!', 'success');
          }
        });
      } else {
        showStatus('Invalid API key. Please check and try again.', 'error');
      }
    }).catch(() => {
      showStatus('Could not validate API key. Check your internet connection.', 'error');
    });
  });

  // Clear API key
  clearApiKeyBtn.addEventListener('click', function() {
    chrome.storage.sync.remove('geminiApiKey', function() {
      if (chrome.runtime.lastError) {
        showStatus('Failed to clear API key', 'error');
      } else {
        apiKeyInput.value = '';
        showStatus('API key cleared', 'success');
      }
    });
  });

  // Handle Enter key in input
  apiKeyInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      saveApiKeyBtn.click();
    }
  });

  // Clear masked value when user starts typing
  apiKeyInput.addEventListener('focus', function() {
    if (apiKeyInput.value === '••••••••••••••••') {
      apiKeyInput.value = '';
    }
  });

  function showStatus(message, type) {
    apiStatus.className = `status ${type}`;
    apiStatus.textContent = message;
    apiStatus.style.display = 'block';
    
    // Clear status after 5 seconds
    setTimeout(() => {
      apiStatus.style.display = 'none';
    }, 5000);
  }

  async function testApiKey(apiKey) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: 'Test message'
            }]
          }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 10,
          }
        })
      });

      return response.ok;
    } catch (error) {
      console.error('API key test failed:', error);
      return false;
    }
  }
});