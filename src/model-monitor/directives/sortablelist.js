/**
 * Created by Christophe on 13/10/2016.
 */

define (["jquery", "underscore", "Draggable"], function($, _, Draggable) {
    return function($timeout){
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                $timeout(function() {
                    var elements = element[0].getElementsByClassName('collection-item-displayer');

                    _.each(elements, function(el) {

                        Draggable.create(
                            el,
                            {
                                type:"y",
                                onDrag: function() {

                                    var t = this;

                                    _.each(elements, function(targetElement) {

                                        if (t.hitTest(targetElement)) {

                                        }
                                    });
                                },
                                onDragEnd: function(e) {
                                    console.log(scope);
                                    e.stopPropagation();
                                    e.stopImmediatePropagation();
                                    e.preventDefault();
                                }
                            }
                        );
                    });
                });
            }
        };
    };
});