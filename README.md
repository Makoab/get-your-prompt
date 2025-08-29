# AI Prompt Enhancer (Browser Extension)

![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?style=for-the-badge)

Transform any selected text into a well-structured, detailed, and effective prompt for Large Language Models using the power of Google's Gemini AI, right from your context menu.

<br>


*(Recommendation: Record a short GIF showing the select -> right-click -> "Get Your Prompt" -> modal workflow and replace the link above.)*

---

## ✨ Features

-   **Seamless Integration**: Activates via the right-click context menu on any selected text.
-   **Powerful Prompt Engineering**: Leverages the Gemini 1.5 Flash model to add context, specify format, and clarify intent.
-   **Simple Interface**: Displays the enhanced prompt in a clean, easy-to-read modal.
-   **One-Click Copy**: Instantly copy the generated prompt to your clipboard.
-   **Secure**: Your Google Gemini API key is stored securely in your browser's local storage and is never shared.
-   **Lightweight**: No unnecessary clutter or background processes.

## ⚙️ How It Works

The extension takes your highlighted text and sends it to the Gemini API with a master prompt that instructs it to act as a prompt engineering expert. It reframes your basic idea into a detailed prompt that is more likely to yield high-quality results from an AI model.

**Original Text:**
> `explain how a black hole works`

**Enhanced Prompt (Example):**
> `Create a detailed yet easy-to-understand explanation of how a black hole is formed and its fundamental properties. Structure the explanation for an audience with a basic understanding of physics. Please cover the following key points:
> 1.  **Stellar Collapse:** How a massive star dies and leads to a singularity.
> 2.  **Event Horizon:** Define what the event horizon is and why nothing can escape from it.
> 3.  **Gravitational Pull:** Explain the concept of extreme gravity and its effect on spacetime.
> 4.  **Anatomy of a Black Hole:** Briefly describe the singularity and the accretion disk.
> 
> The desired output should be approximately 3-4 paragraphs long.`

## 🚀 Installation and Setup

Since this extension is not on the Chrome Web Store, you will need to install it manually in developer mode.

### 1. Download the Code

Click the green `<> Code` button on this repository's main page and select **Download ZIP**. Unzip the downloaded file on your computer.

Alternatively, if you have Git installed, you can clone the repository:
```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Install the Extension in Your Browser

These instructions are for Google Chrome, but the process is very similar for other Chromium-based browsers like Microsoft Edge or Brave.

1.  Open your browser and navigate to the extensions page. You can do this by typing `chrome://extensions` in the address bar and pressing Enter.
2.  In the top right corner of the extensions page, toggle on **Developer mode**.
3.  Three new buttons will appear. Click on the **Load unpacked** button.
4.  A file selection dialog will open. Navigate to the folder where you unzipped or cloned the code and select it.
5.  The "AI Prompt Enhancer" extension will now appear in your list of extensions. Make sure it is enabled!

### 3. Configure the API Key

The extension requires a Google Gemini API key to function.

1.  **Get your API Key**: Visit the [Google AI Studio](https://ai.google.dev/gemini-api/docs/api-key) to get your free API key.
2.  **Save the Key**:
    *   Click on the "AI Prompt Enhancer" icon in your browser's toolbar (you may need to "pin" it first).
    *   The settings popup will appear.
    *   Paste your API key into the input field and click **Save API Key**.
    *   You should see a success message confirming the key is saved.

The extension is now ready to use!

## 🧑‍💻 How to Use

1.  Go to any webpage with text.
2.  Highlight a sentence or a phrase you want to turn into a detailed prompt (e.g., "a logo for a coffee shop").
3.  **Right-click** on the highlighted text.
4.  From the context menu, select **Get Your Prompt**.
5.  A modal will appear on the screen with the newly generated prompt. You can then copy it and use it wherever you need.

## 🛠️ Built With

-   **JavaScript (ES6+)**: For all core logic.
-   **HTML5 & CSS3**: For the popup settings and results modal.
-   **Chrome Extension Manifest V3**: The current standard for building secure and performant browser extensions.
-   **Google Gemini API**: The generative AI model powering the prompt enhancement.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Disclaimer: This is a personal project and is not affiliated with Google.*