function LinkHover(outputText) {
    document.getElementById("link-text").innerHTML = outputText;
    document.getElementById("link-text").style.opacity = '1';
    document.getElementById("link-text").style.transition = "0.5s opacity";
}

function LinkNoHover() {
    document.getElementById("link-text").innerHTML = "&nbsp;";
    document.getElementById("link-text").style.opacity = '0';
    document.getElementById("link-text").style.transition = "0s opacity";
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}