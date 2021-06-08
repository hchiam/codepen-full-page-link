// https://cdn.jsdelivr.net/gh/hchiam/codepen-full-page-link@master/codepen-full-page-link.js

function _showRedirectLinkAsNeeded(codePenIdentifier) {
  const thisUrl = document.URL;
  if (thisUrl.indexOf("/full") === -1) {
    const fullPageURL = "https://codepen.io/hchiam/full/" + codePenIdentifier;
    let goFullPage = document.getElementById("gofullpage");
    if (!goFullPage) {
      goFullPage = document.createElement("p");
      document.body.prepend(goFullPage);
    }
    goFullPage.innerHTML = "Go ";
    const aTag = document.createElement("a");
    aTag.setAttribute("href", fullPageURL);
    aTag.setAttribute("target", "_blank"); // open in new window
    aTag.setAttribute("aria-description", "(opens in new window)");
    aTag.innerHTML = "full page view";
    goFullPage.appendChild(aTag);
  }
}
