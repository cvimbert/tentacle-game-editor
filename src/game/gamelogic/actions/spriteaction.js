/**
 * Created by Christophe on 27/09/2016.
 */
define([], function() {

    return function (model, modelManager, gameManager) {

        var sprite = gameManager.getObjectByUid(model.get("sprite"));
        var spriteAction = model.get("saction");

        switch (spriteAction) {
            case "show":
                sprite.show();
                break;

            case "hide":
                sprite.hide();
                break;
        }

    };
});