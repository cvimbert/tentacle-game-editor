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
            var currentNode;

            this.initialize = function() {
                nodes = [];
                var nodesUidsCollection = model.get("nodes");

                _.each(nodesUidsCollection, function(uid) {
                    nodes.push(gameManager.getObjectByUid(uid));
                });
            };

            this.hide = function() {
                _.each(nodes, function(node) {
                    node.hide();
                });
            };

            this.setCurrentNodeIndex = function(value) {
                this.setNodeAsCurrent(nodes[0]);
            };

            this.setNodeAsCurrent = function(node) {
                var self = this;

                if (currentNode) {
                    currentNode.disable();
                }

                currentNode = node;
                this.hide();
                node.display();
                node.enable(function(newNode) {
                    // callback de changement de noeud
                    self.setNodeAsCurrent(newNode);
                });
            };
        }
    }
});