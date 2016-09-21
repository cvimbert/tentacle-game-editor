/**
 * Created by Christophe on 21/09/2016.
 */
define([], function() {
    return {
        initialize: function() {
            this.sprite1 = this.getObjectById("sprite1");
            this.sprite2 = this.getObjectById("sprite2");
        },
        on: function() {
            var self = this;

            this.bind(this.sprite1, "visible", function() {
                if (self.sprite2.isVisible()) {
                    self.executeAction();
                }
            });

            this.bind(this.sprite2, "visible", function() {
                if (self.sprite1.isVisible()) {
                    self.executeAction();
                }
            });
        },
        off: function() {
            this.unbind(this.sprite1, "visible");
            this.unbind(this.sprite2, "visible");
        }
    }
});