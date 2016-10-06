/**
 * Created by Christophe on 05/10/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.sprite = this.getObjectById("sprite");
            this.eventType = this.getModelProperty("eventtype");
        },
        on: function() {
            var self = this;

            if (this.eventType === "collision") {
                this.collisionSprite = this.getObjectById("collisionsprite");

                this.bind(this.sprite, "visible", function() {
                    if (self.collisionSprite.isVisible()) {
                        self.executeAction();
                    }
                });

                this.bind(this.collisionSprite, "visible", function() {
                    if (self.sprite.isVisible()) {
                        self.executeAction();
                    }
                });
            }
        },
        off: function() {
            if (this.eventType === "collision") {
                this.unbind(this.sprite, "visible");
                this.unbind(this.collisionSprite, "visible");
            }
        }
    }
});