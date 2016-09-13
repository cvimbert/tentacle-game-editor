/**
 * Created by Christophe on 08/09/2016.
 */
define(["underscore", "displayobject"], function(_, DisplayObject) {

    return function (model, modelManager, gameManager) {

        _.extend(this, DisplayObject);

        var graphicSpriteUid = model.get("reference");
        this.graphicSpriteModel = modelManager.getModelByUid(graphicSpriteUid);
        this.displayUid = this.graphicSpriteModel.uid;
    }
});