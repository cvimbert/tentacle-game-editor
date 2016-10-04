/**
 * Created by Christophe on 28/09/2016.
 */
define([], function() {

    return {
        launch: function() {
            console.log("set: " + this.getModelProperty("vvalue"));
            this.launchObjectCommand("variable", "vaction", {
                set: "vvalue"
            });
        }
    };
});