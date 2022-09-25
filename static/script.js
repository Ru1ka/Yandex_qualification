function discord_copy() {
    var copyText = document.getElementById("hide_txt");
    copyText.select();
    document.execCommand("copy");
    
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }