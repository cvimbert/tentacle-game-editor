/**
 * Created by Christophe on 02/09/2016.
 */
(function(factory) {

    var root = (typeof self == 'object' && self.self === self && self) ||
        (typeof global == 'object' && global.global === global && global);

    if (typeof define === 'function' && define.amd) {
        define(["jquery", "underscore"], function($, _) {
            return factory($, _);
        });
    } else {
        root.TentacleMonitorButton = factory(root.$, root._);
    }

})(function($, _) {

    return function (id, buttonDescriptor, panelsSet) {
        this.create = function () {
            var tp = _.template('<button id="<%= id %>" ng-click="<%= onclick %>" type="button" class="btn"><%= label %></button>');

            var clickAction = "";

            if (buttonDescriptor.action) {
                if (buttonDescriptor.action.type === "navigatetopanel") {
                    clickAction = "navigateTo('" + buttonDescriptor.action.panelid + "')";
                }

                if (buttonDescriptor.action.type === "save") {
                    clickAction = "save()";
                }
            }

            var html = tp({
                id: id,
                label: buttonDescriptor.label,
                onclick: clickAction
            });

            html = $(html);

            if (buttonDescriptor.css) {
                html.addClass(buttonDescriptor.css);
            } else {
                html.addClass("btn-primary");
            }

            $("#" + buttonDescriptor.containerid, panelsSet.template).append(html);
        };
    }

});