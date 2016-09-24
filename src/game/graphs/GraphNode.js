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

            var state;
            var links;

            this.initialize = function() {

                var stateUid = model.get("state");
                state = gameManager.getObjectByUid(stateUid);

                links = [];
                var linksUidsCollection = model.get("links");

                _.each(linksUidsCollection, function(uid) {
                    links.push(gameManager.getObjectByUid(uid));
                });
            };

            this.display = function() {
                state.display();
            };

            this.hide = function() {
                state.hide();
            };

            this.enable = function(callbackFunction) {
                _.each(links, function(link) {
                    link.enableTriggers(callbackFunction);
                });
            };

            this.disable = function() {
                _.each(links, function(link) {
                    link.disableTriggers();
                });
            };
        }
    }
});