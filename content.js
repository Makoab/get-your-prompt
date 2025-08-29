// Content script to display the enhanced prompt

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Remove any existing modal first
  const existingModal = document.getElementById('get-prompt-result-modal');
  if (existingModal) {
    existingModal.remove();
  }

  if (request.type === 'PROMPT_GENERATION_START') {
    displayModal('<h3>Generating Prompt...</h3><div class="spinner"></div>', false);
  } else if (request.type === 'SHOW_PROMPT_RESULT') {
    const modalContent = `
      <h3>Your Enhanced Prompt</h3>
      <div class="prompt-text-container">${escapeHTML(request.prompt)}</div>
      <div class="modal-buttons">
        <button id="copyPromptBtn">Copy Prompt</button>
        <button id="closePromptBtn" class="secondary">Close</button>
      </div>
    `;
    displayModal(modalContent, true);
  } else if (request.type === 'SHOW_ERROR') {
    const errorContent = `
      <h3 class="error-title">Error</h3>
      <p class="error-message">${escapeHTML(request.message)}</p>
      <div class="modal-buttons">
        <button id="closePromptBtn" class="secondary">Close</button>
      </div>
    `;
    displayModal(errorContent, true);
  }
});

function displayModal(content, showActions) {
  const modal = document.createElement('div');
  modal.id = 'get-prompt-result-modal';
  modal.innerHTML = `<div class="modal-content">${content}</div>`;
  document.body.appendChild(modal);

  if (showActions) {
    const closeBtn = document.getElementById('closePromptBtn');
    if (closeBtn) {
      closeBtn.onclick = () => modal.remove();
    }

    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        const promptText = modal.querySelector('.prompt-text-container').innerText;
        navigator.clipboard.writeText(promptText).then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => { copyBtn.textContent = 'Copy Prompt'; }, 2000);
        });
      };
    }
  }
  
  // Close modal by clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'get-prompt-result-modal') {
      modal.remove();
    }
  });
}

// Function to escape HTML to prevent injection issues
function escapeHTML(str) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    return p.innerHTML.replace(/\n/g, '<br>');
}