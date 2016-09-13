/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore", "sprite", "spritesgroup"], function(_, Sprite, SpritesGroup) {

    return function (modelManager) {

        var modelsByType = {};
        var models = {};

        this.initialize = function() {
            var completeModels = modelManager.getCompleteModel();

            _.each(completeModels, function(modelsList, type) {

                if (!modelsByType[type]) {
                    modelsByType[type] = {};
                }

                _.each(modelsList, function(model, uid) {
                    try {
                        var classFunction = eval(type);
                        var instanciedClass = new classFunction(model, modelManager, this);
                        modelsByType[type][uid] = instanciedClass;
                        models[uid] = instanciedClass;
                    } catch (e) {
                        console.log(e.message);
                    }
                });
            });
        };

        this.getObjectByUid = function(uid) {
            return models[uid];
        };

        this.executeDisplayList = function(displayList) {

        };

        this.showSprites = function(spritesList) {

        };

        this.hideSprites = function(spritesList) {

        }
    }
});