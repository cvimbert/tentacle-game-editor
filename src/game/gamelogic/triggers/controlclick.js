/**
 * Created by Christophe on 21/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.control = this.getObjectById("control");
            this.eventType = this.getModelProperty("eventtype");
        },
        on: function() {
            var self = this;

            this.bind(this.control, this.eventType, function() {
                self.executeAction();
            });
        },
        off: function() {
            this.unbind(this.control, this.eventType);
        }
    }
});