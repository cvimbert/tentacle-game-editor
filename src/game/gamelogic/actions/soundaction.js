/**
 * Created by Christophe on 17/10/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.soundUid = getModelProperty("sound");
            this.actionType = getModelProperty("sndaction");
        },
        launch: function() {

            switch (this.actionType) {
                case "play":
                    this.gameManager.soundManager.play(this.soundUid);
                    break;
            }
        }
    }
});