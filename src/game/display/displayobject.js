/**
 * Created by Christophe on 13/09/2016.
 */
define(["eventdispatcher", "underscore"], function(EventDispatcher, _) {

    return _.extend({
        bindedBooleanVariable: null,
        show: function() {
            this.setVisibility(true);
        },
        hide: function() {
            this.setVisibility(false);
        },
        toggle: function(value) {
            if (value !== undefined) {
                this.setVisibility(value);
            } else {
                this.setVisibility(!this.bindedBooleanVariable[this.model.uid]);
            }
        },
        setVisibility: function(val) {
            this.bindedBooleanVariable[this.model.uid] = val;

            // on doit pouvoir déplacer cet appel
            this.gameManager.scope.$applyAsync();
        }
    }, EventDispatcher);
});