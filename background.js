chrome.tabs.onUpdated.addListener(function (tabId, changeinfo, tab) {
    if (~tab.url.indexOf("https://twitter.com/intent/tweet/complete")) {
        if (changeinfo.status === "complete") {
            chrome.tabs.remove(tabId);
        }
    }
});