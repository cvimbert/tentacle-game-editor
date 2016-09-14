/**
 * Created by Christophe on 13/09/2016.
 */
define([], function() {

    return {
        bindedBooleanVariable: null,
        show: function() {
            this.bindedBooleanVariable[this.model.uid] = true;
        },
        hide: function() {
            this.bindedBooleanVariable[this.model.uid] = false;
        },
        toggle: function(value) {
            if (value !== undefined) {
                this.bindedBooleanVariable[this.model.uid] = value;
            } else {
                this.bindedBooleanVariable[this.model.uid] = !this.bindedBooleanVariable[this.model.uid];
            }
        }
    }
});