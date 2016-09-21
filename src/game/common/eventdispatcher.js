/**
 * Created by Christophe on 21/09/2016.
 */
define(["underscore"], function(_) {

    return {
        eventsCallback: {},
        on: function(type, callback, objectUid) {
            if (!this.eventsCallback[type]) {
                this.eventsCallback[type] = {};
            }

            this.eventsCallback[type][objectUid] = callback;
        },
        off: function(type, objectUid) {
            delete this.eventsCallback[type][objectUid];
        },
        dispatchEvent: function(type) {
            _.each(this.eventsCallback[type], function(callback) {
                callback();
            });
        }
    }
});