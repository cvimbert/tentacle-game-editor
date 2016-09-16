/**
 * Created by Christophe on 13/09/2016.
 */
define([
    "underscore",
    "sprite",
    "spritesgroup",
    "groupstate",
    "sequence",
    "variable",
    "condition"
], function(
    _,
    Sprite,
    SpritesGroup,
    GroupState,
    Sequence,
    Variable,
    Condition
) {

    return function (modelManager, gameConsole, scope) {

        var modelsByType = {};
        var models = {};
        this.scope = null;

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

                            var instanciedClass = new classFunction[type](model, modelManager, self);
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

            // initialisation de tous les objets
            _.each(models, function(object) {
                object.initialize();
            });
        };

        this.getObjectByUid = function(uid) {
            return models[uid];
        };

        this.setScope = function(scope) {
            self.scope = scope;
        };

        this.getObjectByName = function(name) {

            if (modelsByName[name])
                return modelsByName[name];
            else
                return null;
        };

        this.getObjectsByType = function(type) {
            return modelsByType[type];
        };

        this.executeDisplayList = function(displayList) {

        };

        this.showSprites = function(spritesList) {

        };

        this.hideSprites = function(spritesList) {

        }
    }
});