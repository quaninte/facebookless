var HideFeed;

HideFeed = {

    init: function(items)
    {
        if (!items.hide_feed) {
            return;
        }

        var fromSID = this.getHideTime(items.from);
        var toSID = this.getHideTime(items.to);
        var currentSID = this.getCurrentSecondsInDay();

        // if from morning to night
        if (fromSID < toSID) {
            console.log('fromSID < toSID');
            // if current SID not in between
            if (currentSID < fromSID || currentSID > toSID) {
                // --> stop
                return;
            }
        } else {
            console.log('fromSID > toSID');
            // from night to morning
            // if current SID in between
            if (currentSID > toSID && currentSID < fromSID) {
                // --> stop
                return;
            }
        }

        // hide feed
        console.log('Hide newsfeed now');
        var newsFeed = $('[id^="topnews_main_stream_"]');

        // add show button
        var showFacebookNewsFeed = $('<div class="showFacebookNewsFeed">' +
            '<div><a class="step1" href="#">Where is that wasting my time news-feed?</a></div>' +
            '<div><a style="display: none;" class="step2" href="#">Show me the news-feed that wasting my time!</a></div>' +
            '</div>')

        $('.step1', showFacebookNewsFeed).click(function() {
            $('.step2', showFacebookNewsFeed).show().click(function() {
                newsFeed.show();
            });
        });

        newsFeed.before(showFacebookNewsFeed);
        newsFeed.hide();
    },

    getCurrentSecondsInDay: function()
    {
        return this.getSecondsInDay(moment().hours(), moment().minutes(), moment().seconds());
    },

    getHideTime: function(timeString)
    {
        var parts = timeString.split(':');
        return this.getSecondsInDay(parts[0], parts[1], 0);
    },

    getSecondsInDay: function(hours, minutes, seconds)
    {
        hours = hours * 3600;
        minutes = minutes * 60;

        return (hours + minutes + seconds);
    }

};

chrome.storage.sync.get(Options.defaults, function(items) {
    HideFeed.init(items);
});