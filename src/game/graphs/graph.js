/**
 * Created by Christophe on 23/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {
        console: {
            prefix: "graph",
            commands: {

            }
        },
        "Graph": function(model, modelManager, gameManager) {
            _.extend(this, EventDispatcher);

            var nodes;

            this.initialize = function() {

                nodes = [];
                var nodesUidsCollection = model.get("nodes");

                _.each(nodesUidsCollection, function(uid) {
                    nodes.push(gameManager.getObjectByUid(uid));
                });

            };
        }
    }
});