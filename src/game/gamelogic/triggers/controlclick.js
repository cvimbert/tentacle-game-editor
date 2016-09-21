/**
 * Created by Christophe on 21/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.control = this.getObjectById("control");
        },
        on: function() {
            var self = this;

            this.bind(this.control, "click", function() {
                self.executeAction();
            });
        },
        off: function() {
            this.unbind(this.control, "click", this.model.uid);
        }
    }
});