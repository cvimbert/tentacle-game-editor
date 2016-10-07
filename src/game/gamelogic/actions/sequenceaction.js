/**
 * Created by Christophe on 27/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.actionType = this.getModelProperty("saction");
        },
        launch: function() {
            var arg;

            if (this.actionType === "setstate") {
                arg = {
                    object: "state"
                };
            } else if (this.actionType === "play") {
                arg = [
                    "period",
                    "occurences",
                    "interruptable"
                ];
            }

            this.launchObjectCommand("sequence", "saction", arg);
        }
    };
});