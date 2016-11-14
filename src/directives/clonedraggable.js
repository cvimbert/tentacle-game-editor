/**
 * Created by Christophe on 04/11/2016.
 */
define(["Draggable", "TweenLite"], function(Draggable, TweenLite) {

    return function () {

        return {

            restrict: "A",

            scope: {
                datas: "=datas",
                ondragend: "=ondragend",
                dropedontarget: "=dropedontarget",
                target: "=target",
                category: "@category",
                model: "=model"
            },

            link: function(scope, element, attributes) {

                scope.srcImage = "data/packages/octopus/" + scope.category + "/" + scope.model.get('file');

                // va être à déplacer
                angular.element(element[0].querySelector(".item-image-container")).css("background-image", "url(" + scope.srcImage + ")");

                var colors = [
                    "#ff0000",
                    "#00ff00",
                    "#0000ff",
                    "#ffff00",
                    "#00ffff",
                    "#ff00ff"
                ];

                var colorIndex = Math.floor(Math.random() * colors.length);
                element.css("background-color", colors[colorIndex]);

                var elem = document.createElement("img");
                elem.src = scope.srcImage;

                elem.onload = function() {
                    if (elem.width > 67) {
                        element.addClass("grid-item--width2");
                    }

                    if (elem.width > 130) {
                        element.addClass("grid-item--width3");
                    }

                    if (elem.height > 35) {
                        element.addClass("grid-item--height2");
                    }

                    if (elem.height > 90) {
                        element.addClass("grid-item--height3");
                    }
                };

                function createAndDragClone(e) {
                    var cloneElement = document.createElement("img");
                    cloneElement.src = scope.srcImage;
                    document.body.appendChild(cloneElement);

                    var drag = Draggable.create(cloneElement, {
                        type: "x,y",
                        onDragStart: function() {

                        },
                        onDragEnd: function() {
                            if (this.hitTest(".scene-editor-main-panel")) {
                                var xPos = Math.floor(this.x - cloneElement.width / 2);
                                var yPos = Math.floor(this.y - cloneElement.height / 2);
                                scope.dropedontarget(scope.model, xPos, yPos);
                            }

                            document.body.removeChild(cloneElement);
                        }
                    })[0];

                    var xpos, ypos;

                    if (e.touches) {
                        xpos = e.touches[0].pageX;
                        ypos = e.touches[0].pageY;
                    } else {
                        xpos = e.pageX;
                        ypos = e.pageY;
                    }

                    TweenLite.set(cloneElement, {
                        css: {
                            x: xpos - cloneElement.width / 2,
                            y: ypos - cloneElement.height / 2
                        }
                    });

                    drag.startDrag(e);
                }

                element.on("mousedown touchstart", function(e) {
                    createAndDragClone(e);
                    e.preventDefault();
                });
            }
        }
    }
});