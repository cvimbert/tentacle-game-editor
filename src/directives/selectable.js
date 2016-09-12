/**
 * Created by Christophe on 12/09/2016.
 */
define([], function() {

    return function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var selected = false;

                element.bind("mousedown", function() {
                    scope.toggleSelection(element);
                });
            }
        };
    }
});