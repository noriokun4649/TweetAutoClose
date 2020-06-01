let urlhistory;
chrome.tabs.onUpdated.addListener(function (tabId, changeinfo, tab) {
    if (changeinfo.status === "complete") {
        if (~tab.url.indexOf("https://twitter.com/")) {
            if (urlhistory.indexOf("https://twitter.com/intent/tweet") === 0) {
                chrome.tabs.remove(tabId);
            }
        }
        urlhistory = tab.url;
    }
});