// add message to newsfeed
var message = getRandomMessage();
var locale;
if (window.navigator.language == 'vi-VN') {
    locale = 'vi';
} else {
    locale = 'en';
}

var moneyBox = $('<div class="moneyBox"><h1>' + message.messages[locale].title + '</h1>' +
    '<img src="' + message.image + '" title="' + message.messages[locale].title + '" class="money-image" />' +
    '<div><button class="closeFacebookBtn">' + message.messages[locale].button + '</button></div>' +
    '</div>');

$('.closeFacebookBtn', moneyBox).click(function() {
    chrome.runtime.sendMessage({type: "closeFacebookTab"});
});

$('#pagelet_composer').after(moneyBox);