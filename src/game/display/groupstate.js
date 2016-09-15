/**
 * Created by Christophe on 14/09/2016.
 */
define(["underscore"], function(_) {

    return {
        console: {
            prefix: "state",
            commands: {
                display: function(state) {
                    state.display();
                }
            }
        },
        "GroupState": function(model, modelManager, gameManager) {

            var spritesCollection;
            var group;

            this.initialize = function() {

                spritesUidCollection = model.get("sprites");
                groupUid = model.get("group");

                spritesCollection = [];

                _.each(spritesUidCollection, function(spriteUid) {
                    spritesCollection.push(gameManager.getObjectByUid(spriteUid));
                });

                group = gameManager.getObjectByUid(groupUid);
            };

            this.display = function() {
                group.hide();

                _.each(spritesCollection, function(sprite) {
                    sprite.show();
                });
            }
        }
    }
});