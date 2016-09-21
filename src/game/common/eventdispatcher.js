/**
 * Created by Christophe on 21/09/2016.
 */
define(["underscore"], function(_) {

    return {
        on: function(type, objectUid, callback) {

            if (!this.eventsCallback) this.eventsCallback = {};

            if (!this.eventsCallback[type]) {
                this.eventsCallback[type] = {};
            }

            this.eventsCallback[type][objectUid] = callback;
        },
        off: function(type, objectUid) {
            delete this.eventsCallback[type][objectUid];
        },
        dispatchEvent: function(type, objectUid) {

            if (!this.eventsCallback || !this.eventsCallback[type]) return;

            _.each(this.eventsCallback[type], function(callback) {
                callback();
            });
        }
    }
});