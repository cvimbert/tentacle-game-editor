/**
 * Created by Christophe on 23/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.gameEventName = this.getModelProperty("eventname");
        },
        on: function() {
            var self = this;
            this.bind(null, this.gameEventName, function() {
                self.executeAction();
            });
        },
        off: function() {
            this.unbind(null, this.gameEventName);
        }
    }
});