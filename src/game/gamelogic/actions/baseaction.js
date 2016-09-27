/**
 * Created by Christophe on 27/09/2016.
 */
define([], function() {

    return function (model, modelManager, gameManager) {

        this.getObjectById = function(id) {
            var uid = model.get(id);
            return gameManager.getObjectByUid(uid);
        };

        this.getModelProperty = function(id) {
            return model.get(id);
        };

        this.launchCommand = function(object, functionName) {
            object[functionName]();
        };

        this.launchObjectCommand = function(objectId, commandName) {
            var object = this.getObjectById(objectId);
            var command = model.get(commandName);
            this.launchCommand(object, command);
        };

        this.getObjectByUid = gameManager.getObjectByUid;
    };
});