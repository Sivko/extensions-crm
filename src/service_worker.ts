console.log("sw-omnibox.js")

chrome.action.setBadgeText({ text: "111", });


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'test') {
    sendResponse("WOOOOORK");
  }
});