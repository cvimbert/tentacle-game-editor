/**
 * Created by Christophe on 27/09/2016.
 */
define(["underscore"], function(_) {

    return {
        initialize: function() {
            this.actionsUids = this.getModelProperty("actions");

        },
        launch: function() {
            var self = this;

            _.each(this.actionsUids, function(uid) {
                self.getObjectByUid(uid).execute();
            });
        }
    };
});