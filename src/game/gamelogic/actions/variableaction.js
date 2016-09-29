/**
 * Created by Christophe on 28/09/2016.
 */
define([], function() {

    return {
        launch: function() {
            this.launchObjectCommand("variable", "vaction", {
                set: "varvalue"
            });
        }
    };
});