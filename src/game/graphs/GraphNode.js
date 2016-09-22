/**
 * Created by Christophe on 22/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {
 
        console: {
            prefix: "graphnode",
            commands: {

            }
        },
        "GraphNode": function(model, modelManager, gameManager) {
            _.extend(this, EventDispatcher);

            this.initialize = function() {

            };
        }
    }
});