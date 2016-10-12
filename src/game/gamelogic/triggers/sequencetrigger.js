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
            var conditionOperand;

            // attention : valable uniquement dans le cas de l'écouteur d'état de la séquence
            if (this.eventType === "enterstate") {
                conditionOperand = this.getObjectById("state");
            }

            this.bind(this.sequence, this.eventType, function(args) {
                if (conditionOperand === undefined || args === conditionOperand) {
                    t.executeAction();
                }
            });
        },
        off: function() {
            this.unbind(this.sequence, this.eventType);
        }
    }
});