function removeElementsByTagName(tagName) {
  const elements = document.getElementsByTagName(tagName);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      removeElementsByTagName("ytd-shorts");
      removeElementsByTagName("ytd-reel-shelf-renderer");
      removeElementsByTagName("ytm-shorts-lockup-view-model-v2");
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
