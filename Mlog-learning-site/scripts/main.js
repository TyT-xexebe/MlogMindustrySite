
function copyToClipboard1(text1) {
    var text = document.getElementById(text1).innerHTML;
  
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
  
    document.body.appendChild(textarea);
  
    textarea.select();
  
    document.execCommand("copy");
  
    document.body.removeChild(textarea);
  }

  function copyToClipboard2(text2) {
    var text = document.getElementById(text2).innerHTML;
  
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
  
    document.body.appendChild(textarea);
  
    textarea.select();
  
    document.execCommand("copy");
  
    document.body.removeChild(textarea);
  }

