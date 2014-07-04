// add message to newsfeed
var moneyBox = $('<div class="moneyBox"><h1>LOOK AT HOW MUCH MONEY YOU CAN MAKE WHILE NOT BROWSING FACEBOOK</h1>' +
    '<img src="http://localhost/facebookless/money.jpg" class="money-image" alt="Money" />' +
    '<div><button class="closeFacebookBtn">Let\'s Make Some Money</button></div>' +
    '</div>');

$('.closeFacebookBtn', moneyBox).click(function() {
    chrome.runtime.sendMessage({type: "closeFacebookTab"});
});

$('#pagelet_composer').after(moneyBox);