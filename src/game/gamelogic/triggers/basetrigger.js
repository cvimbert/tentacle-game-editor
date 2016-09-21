/**
 * Created by Christophe on 21/09/2016.
 */
define([], function() {

    return function (model, gameManager, action, condition) {

        this.executeAction = function() {
            if (!condition || condition.eval()) {
                action.execute();
            }
        };

        this.bind = function(object, eventName, callback) {
            object.on(eventName, model.uid, callback);
        };

        this.unbind = function(object, eventName) {
            object.off(eventName, model.uid);
        };

        this.getObjectById = function(id) {
            var uid = model.get(id);
            return gameManager.getObjectByUid(uid);
        };
    }
});