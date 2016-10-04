/**
 * Created by Christophe on 22/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {
        console: {
            prefix: "clock",
            commands: {

            }
        },
        "Clock": function(model, modelManager, gameManager) {
            _.extend(this, EventDispatcher);

            var period;
            var interval;

            this.initialize = function() {
                period = model.get("period");
            };

            this.start = function() {
                var t = this;

                // par prudence
                this.stop();

                interval = setInterval(function() {
                    t.dispatchEvent("period");
                }, period * 1000);
            };

            this.stop = function() {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
            };
        }
    }
});