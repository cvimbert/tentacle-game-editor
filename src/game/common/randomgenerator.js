/**
 * Created by Christophe on 26/09/2016.
 */
define(["underscore"], function(_) {

    return function(mode, array, options) {

        var current = [];
        current = _.clone(array);

        this.getRandObject = function() {

            var index = Math.floor(Math.random() * current.length);
            var choosenObject;

            switch (mode) {

                case "normal":
                    choosenObject = array[index];

                    break;

                case "sequence":
                    choosenObject = current[index];
                    current.splice(index, 1);

                    if (current.length === 0) {
                        current = _.clone(array);
                    }

                    break;
            }

            return choosenObject;
        };
    }
});