/**
 * Created by Christophe on 26/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.clock = this.getObjectById("clock");
        },
        on: function() {
            var t = this;
            this.bind(this.clock, "period", function() {
                t.executeAction();
            });
        },
        off: function() {
            this.unbind(this.clock, "period");
        }
    }
});