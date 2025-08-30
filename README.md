# GET YOUR Prompt (Browser Extension)

![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?style=for-the-badge)

Transform any selected text into a well-structured, detailed, and effective prompt for Large Language Models using the power of Google's Gemini AI, right from your context menu.

<br>


*<img width="800" height="405" alt="image" src="https://s3.ezgif.com/tmp/ezgif-3cae0130272f9a.gif" />
*

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
> `Generate a concise, yet informative explanation of how black holes work, suitable for a scientifically literate but non-expert audience (e.g., advanced undergraduate students).  Maintain a formal and objective tone, avoiding jargon where possible and providing clear, simple analogies where appropriate.  The explanation should focus on the formation of black holes from stellar collapse, the properties of the event horizon and singularity, and the effects of black holes on surrounding matter and spacetime.  The explanation should be structured as a numbered list with at least five points, each point expanding on a key aspect of black hole physics.  Include visual descriptions where appropriate, but avoid complex mathematical equations or highly technical astrophysical terms. The explanation should specifically avoid discussing theoretical concepts like wormholes or the information paradox.  The output should be approximately 300-400 words in length.`

## 🚀 Installation and Setup

Since this extension is not on the Chrome Web Store, you will need to install it manually in developer mode.

### 1. Download the Code

Click the green `<> Code` button on this repository's main page and select **Download ZIP**. Unzip the downloaded file on your computer.

Alternatively, if you have Git installed, you can clone the repository:
```bash
git clone https://github.com/Makoab/get-your-prompt.git
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

This project is licensed under the CC BY-NC-ND 4.0 License. See the [LICENSE](LICENSE) file for details.

---

*Disclaimer: This is a personal project and is not affiliated with Google.*
