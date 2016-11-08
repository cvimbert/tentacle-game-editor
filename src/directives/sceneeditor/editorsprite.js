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
                onselect: "=onselect"
            },

            link: function(scope, element, attributes) {
                console.log(scope.type);
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
                    scope.onselect(scope.model);
                });
            }
        }
    }
});