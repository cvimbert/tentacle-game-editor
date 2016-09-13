/**
 * Created by Christophe on 13/09/2016.
 */
define([], function() {

    return {
        bindedBooleanVariable: null,
        show: function() {
            this.bindedBooleanVariable = true;
        },
        hide: function() {
            this.bindedBooleanVariable = false;
        },
        toggle: function(value) {
            if (value !== undefined) {
                this.bindedBooleanVariable = value;
            } else {
                this.bindedBooleanVariable = !this.bindedBooleanVariable;
            }
        }
    }
});