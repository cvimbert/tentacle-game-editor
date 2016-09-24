/**
 * Created by Christophe on 23/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.time = this.getModelProperty("time");
        },
        on: function() {
            var self = this;

            this.timeout = setTimeout(function() {
                self.executeAction();
            }, self.time * 1000);
        },
        off: function() {
            if (this.timeout) {
                clearInterval(this.timeout);
            }
        }
    }
});