/**
 * Created by Christophe on 18/10/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.animation = this.getObjectById("animation");
            this.eventType = this.getModelProperty("eventtype");
        },
        on: function() {
            var t = this;

            this.bind(this.animation, this.eventType, function() {
                t.executeAction();
            });
        },
        off: function() {
            this.unbind(this.animation, this.eventType);
        }
    }
});