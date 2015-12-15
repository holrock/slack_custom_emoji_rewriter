chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    rewrite_map = {
      "https://emoji.slack-edge.com/***.png": "https://emoji.slack-edge.com/***.png"
    }
    img = rewrite_map[details.url];
    if(img)
      return {redirectUrl: img};
  },
  {urls: ["https://emoji.slack-edge.com/*"]},
  ["blocking"]);
