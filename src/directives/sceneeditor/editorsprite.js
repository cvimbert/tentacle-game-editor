/**
 * Created by Christophe on 08/11/2016.
 */
define(["TweenLite", "Draggable"], function(TweenLite, Draggable) {

    return function () {

        return {

            restrict: "A",

            scope: {
                model: "=model",
                type: "@type",
                onselect: "=onselect",
                register: "=register"
            },

            link: function(scope, element, attributes) {

                scope.register(scope);

                // doit être draggable, et répercuter les changements de position dans le modèle
                TweenLite.set(element, {
                    css: {
                        x: scope.model.get("x"),
                        y: scope.model.get("y")
                    }
                });

                Draggable.create(element, {
                    type: "x,y",
                    onDragEnd: function() {
                        scope.model.set("x", this.x);
                        scope.model.set("y", this.y);
                    }
                });

                // doit être sélectionnable pour lancement d'une action sur cet objet
                element.on("click", function() {
                    scope.onselect(scope);
                });

                element.on("touchstart", function() {
                    scope.onselect(scope);
                });

                scope.select = function() {
                    element.addClass("selected");
                };

                scope.unselect = function() {
                    element.removeClass("selected");
                };

                scope.move = function(axis, quantity) {

                    var cssProps = {};
                    var newPos = scope.model.get(axis) + quantity;
                    cssProps[axis] = newPos;

                    TweenLite.set(element, {
                        css: cssProps
                    });

                    scope.model.set(axis, newPos);
                };
            }
        }
    }
});