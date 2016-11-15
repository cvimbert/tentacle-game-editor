/**
 * Created by Christophe on 15/11/2016.
 */
define(["TweenLite"], function(TweenLite) {

    return function () {

        return {

            restrict: "CA",

            link: function(scope, element, attributes) {

                var wd = angular.element(window);

                var parentLayer = element.parent()[0];

                function setLayerTransforms() {

                    TweenLite.set(element, {
                        clearProps: "all"
                    });

                    var parentWidth = parentLayer.clientWidth;
                    var parentHeight = parentLayer.clientHeight;

                    var elementWidth = element[0].clientWidth;
                    var elementHeight = element[0].clientHeight;

                    var parentRatio = parentWidth / parentHeight;
                    var elementRatio = elementWidth / elementHeight;

                    var newRatio;

                    if (parentRatio < elementRatio) {
                        newRatio = parentWidth / elementWidth;
                    } else {
                        newRatio = parentHeight / elementHeight;
                    }

                    if (newRatio > 1) newRatio = 1;

                    TweenLite.set(element, {
                        css: {
                            scale: newRatio
                        }
                    });

                    // calcul de la position pour centrage
                    var left = (parentWidth - elementWidth * newRatio) / 2;
                    var top = (parentHeight - elementHeight * newRatio) / 2;

                    element.css("top", top + "px");
                    element.css("left", left + "px");
                }

                setLayerTransforms();

                wd.on("resize", setLayerTransforms);
            }
        }
    }
});