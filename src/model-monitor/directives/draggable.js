/**
 * Created by Christophe on 06/09/2016.
 */

define ([], function() {
    return function(){
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.draggable({
                    cursor: "move",
                    stop: function (event, ui) {

                        // mettre un selected model à la place
                        scope.model.set("x", ui.position.left);
                        scope.model.set("y", ui.position.top);
                    }
                });
            }
        };
    };
});