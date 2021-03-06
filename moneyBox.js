// add message to newsfeed
var MoneyBox;
MoneyBox = {

    init: function(items)
    {
        var message = getRandomMessage();
        var locale;

        if (items.language == 'auto') {
            if (window.navigator.language == 'vi-VN') {
                locale = 'vi';
            } else {
                locale = 'en';
            }
        } else {
            locale = items.language;
        }
        console.log('locale: ' + locale);

        var moneyBox = $('<div class="moneyBox"><h1>' + message.messages[locale].title + '</h1>' +
            '<img src="' + message.image + '" title="' + message.messages[locale].title + '" class="money-image" />' +
            '<div><button class="closeFacebookBtn">' + message.messages[locale].button + '</button></div>' +
            '</div>');

        $('.closeFacebookBtn', moneyBox).click(function() {
            chrome.runtime.sendMessage({type: "closeFacebookTab"});
        });

        $('#pagelet_composer').after(moneyBox);
    }
}

chrome.storage.sync.get(Options.defaults, function(items) {
    MoneyBox.init(items);
});