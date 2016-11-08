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
                target: "=target"
            },

            link: function(scope, element, attributes) {

                function createAndDragClone(e) {
                    var clonedHtml = element[0].innerHTML;
                    var clone = angular.element(clonedHtml);
                    document.body.appendChild(clone[0]);
                    clone.css("width", "initial");

                    var drag = Draggable.create(clone[0], {
                        type: "x,y",
                        onDragStart: function() {

                        },
                        onDragEnd: function() {
                            if (this.hitTest(".scene-editor-main-panel")) {
                                var xPos = Math.floor(this.x - clone[0].width / 2);
                                var yPos = Math.floor(this.y - clone[0].height / 2);
                                scope.dropedontarget(scope.datas, xPos, yPos);
                            }

                            document.body.removeChild(clone[0]);
                        }
                    });

                    TweenLite.set(clone[0], {
                        css: {
                            x: e.target.x,
                            y: e.target.y
                        }
                    });

                    drag[0].startDrag(e);
                }

                element.on("mousedown", createAndDragClone);
                element.on("touchstart", createAndDragClone);
            }
        }
    }
});