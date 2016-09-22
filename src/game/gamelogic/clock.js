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

            this.initialize = function() {

            };

            this.start = function() {

            };

            this.stop = function() {

            };

            this.pause = function() {

            }
        }
    }
});