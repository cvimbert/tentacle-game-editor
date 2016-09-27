/**
 * Created by Christophe on 27/09/2016.
 */
define([], function() {

    return function (model, modelManager, gameManager) {

        var group = gameManager.getObjectByUid(model.get("group"));
        var groupAction = model.get("gaction");

        switch (groupAction) {
            case "show":
                group.show();
                break;

            case "hide":
                group.hide();
                break;
        }
    };
});