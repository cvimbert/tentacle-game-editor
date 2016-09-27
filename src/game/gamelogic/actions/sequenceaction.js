/**
 * Created by Christophe on 27/09/2016.
 */
define([], function() {

    return function (model, modelManager, gameManager) {

        var sequence = gameManager.getObjectByUid(model.get("sequence"));
        var sequenceAction = model.get("saction");

        var expression = "sequence." + sequenceAction + "()";
        eval(expression);
    };
});