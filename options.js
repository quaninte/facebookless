// Saves options to chrome.storage
function save_options() {
    var color = document.getElementById('color').value;
    var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
        favoriteColor: color,
        likesColor: likesColor
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        favoriteColor: 'red',
        likesColor: true
    }, function(items) {
        document.getElementById('color').value = items.favoriteColor;
        document.getElementById('like').checked = items.likesColor;
    });
}

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