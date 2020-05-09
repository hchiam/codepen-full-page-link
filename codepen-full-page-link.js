// https://cdn.jsdelivr.net/gh/hchiam/codepen-full-page-link@master/codepen-full-page-link.js

function _showRedirectLinkAsNeeded(codePenIdentifier) {
  const thisUrl = document.URL;
  if (thisUrl.indexOf("/full") === -1) {
    const fullPageURL = "https://codepen.io/hchiam/full/" + "asdf";
    let gofullpage = document.getElementById("gofullpage");
    if (!gofullpage) {
      gofullpage = document.createElement("p");
      document.body.prepend(gofullpage);
    }
    gofullpage.innerHTML = "Full page view: ";
    const aTag = document.createElement("a");
    aTag.setAttribute("href", fullPageURL);
    aTag.setAttribute("target", "_blank"); // open in new window
    aTag.innerHTML = "here";
    gofullpage.appendChild(aTag);
  }
}
