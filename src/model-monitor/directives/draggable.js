/**
 * Created by Christophe on 06/09/2016.
 */

define (["Draggable"], function(Draggable) {
    return function(){
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                Draggable.create(
                    element,
                    {
                        type:"y"
                    }
                );
            }
        };
    };
});