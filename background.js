chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (typeof request.type == 'undefined' || request.type != 'closeFacebookTab') {
        return;
    }

    chrome.tabs.remove(sender.tab.id, function() { });
});