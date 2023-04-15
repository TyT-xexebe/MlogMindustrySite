// JavaScript function to copy text to clipboard
function copyToClipboard1(text1) {
    // Get the text to copy
    var text = document.getElementById(text1).innerHTML;
  
    // Create a new textarea element to hold the text
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
  
    // Add the textarea to the document
    document.body.appendChild(textarea);
  
    // Select the text in the textarea
    textarea.select();
  
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Remove the textarea from the document
    document.body.removeChild(textarea);
  }