/**
 * Created by Christophe on 03/10/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.sequence = this.getObjectById("sequence");
            this.eventType = this.getModelProperty("eventtype");
        },
        on: function() {
            var t = this;

            // attention : valable uniquement dans le cas de l'écouteur d'état de la séquence
            var state = this.getObjectById("state");

            this.bind(this.sequence, this.eventType, function(args) {
                if (args === state) {
                    t.executeAction();
                }
            });
        },
        off: function() {
            this.unbind(this.sequence, this.eventType);
        }
    }
});