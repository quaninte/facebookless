// Saves options to chrome.storage
var Options;
Options = {

    defaults: {
        hide_feed: 1,
        from: '9:00',
        to: '18:00'
    },

    timeKeys: ['from', 'to'],

    init: function()
    {
        $('.timepicker').timepicker({ 'timeFormat': 'H:i' });

        this.restoreOptions();

        $('#save').click(function() {
            Options.saveOptions();
        });
    },

    restoreOptions: function()
    {
        chrome.storage.sync.get(Options.defaults, function(items) {
            $('#hide_feed').prop('checked', items.hide_feed);

            for (i = 0; i < Options.timeKeys.length; i++) {

                $('#' + Options.timeKeys[i]).val(items[Options.timeKeys[i]]);
            }

        });
    },

    saveOptions: function()
    {
        var options = {
            hide_feed: $('#hide_feed').prop('checked')
        };

        for (i = 0; i < Options.timeKeys.length; i++) {
            options[Options.timeKeys[i]] = $('#' + Options.timeKeys[i]).val();
        }

        chrome.storage.sync.set(options, function() {
            // Update status to let user know options were saved.
            $('#status').html('Options saved.');
            setTimeout(function() {
                $('#status').html('');
            }, 750);
        });
    }

};

$(function() {
    if ($('#facebookless-options').size()) {
        Options.init();
    }
});