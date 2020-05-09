function _showRedirectLinkAsNeeded(codePenIdentifier) {
  const thisUrl = document.URL;
  if (thisUrl.indexOf("/full") === -1) {
    const fullPageURL = "https://codepen.io/hchiam/full/" + codePenIdentifier;
    document.getElementById("gofullpage").innerHTML = "Full page view: ";
    const aTag = document.createElement("a");
    aTag.setAttribute("href", fullPageURL);
    aTag.setAttribute("target", "_blank"); // open in new window
    aTag.innerHTML = "here";
    document.getElementById("gofullpage").appendChild(aTag);
  }
}
