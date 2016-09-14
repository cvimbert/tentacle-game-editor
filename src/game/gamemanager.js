/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore", "sprite", "spritesgroup"], function(_, Sprite, SpritesGroup) {

    return function (modelManager, gameConsole) {

        var modelsByType = {};
        var models = {};

        // pour la console uniquement
        var modelsByName = {};

        var self = this;

        this.initialize = function() {
            var completeModels = modelManager.getCompleteModel();

            _.each(completeModels, function(modelsList, type) {

                if (!modelsByType[type]) {
                    modelsByType[type] = {};
                }

                var classFunction;

                try {
                    classFunction = eval(type);
                } catch (e) {

                }

                if (classFunction) {

                    // enregistrement des commandes de console
                    gameConsole.registerObject(classFunction);

                    _.each(modelsList, function(model, uid) {

                        if (classFunction) {

                            var instanciedClass = new classFunction.constructor(model, modelManager, self);
                            modelsByType[type][uid] = instanciedClass;
                            models[uid] = instanciedClass;

                            var name = model.get("name");
                            if (name) {
                                modelsByName[name] = instanciedClass;
                            }

                        }
                    });
                }


            });
        };

        this.getObjectByUid = function(uid) {
            return models[uid];
        };

        this.getObjectByName = function(name) {

            if (modelsByName[name])
                return modelsByName[name];
            else
                return null;
        };

        this.executeDisplayList = function(displayList) {

        };

        this.showSprites = function(spritesList) {

        };

        this.hideSprites = function(spritesList) {

        }
    }
});