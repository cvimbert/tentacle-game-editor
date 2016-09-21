/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return _.extend({
        bindedBooleanVariable: null,
        //isVisible: false,
        show: function() {
            this.setVisibility(true);
        },
        hide: function() {
            this.setVisibility(false);
        },
        /*reinit: function() {
            this.setVisibility(false);
        },*/
        toggle: function(value) {
            if (value !== undefined) {
                this.setVisibility(value);
            } else {
                this.setVisibility(!this.bindedBooleanVariable[this.model.uid]);
            }
        },
        isVisible: function() {
            return this.bindedBooleanVariable[this.model.uid];
        },
        setVisibility: function(val) {

            if (val === true) {
                if (this.bindedBooleanVariable[this.model.uid] === false) {
                    this.dispatchEvent("visible");
                }
            } else {
                if (this.bindedBooleanVariable[this.model.uid] === true)
                    this.dispatchEvent("hidden");
            }

            this.bindedBooleanVariable[this.model.uid] = val;

            // on doit pouvoir déplacer cet appel
            this.gameManager.scope.$applyAsync();

            //this.isVisible = val;
        }
    }, EventDispatcher);
});