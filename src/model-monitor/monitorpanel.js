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
        root.TentacleMonitorPanel = factory(root.$, root._);
    }

})(function($, _) {

    return function (id, panelDesc, panelsSet) {
        this.create = function () {
            var tp = _.template('<div id="<%= id %>" ng-init="init(\'<%= datas %>\');" ng-controller="<%= controller %>" ng-include="\'<%= monitortemplate %>\'">Container1</div>');

            // passage de données au scope via ng-init
            var datas = {
                name: panelDesc.name,
                modeltype: panelDesc.type
            };

            // sérialisation des données passées en paramètre au scope
            var serDatas = JSON.stringify(datas);

            // codage en base64 de cette chaine
            serDatas = btoa(serDatas);

            var template;

            if (panelDesc.template) {
                template = panelDesc.template;
            } else {
                // TODO: temporaire, mettre un attribut de template par défaut dans la conf
                template = "includes/basemonitor.html";
            }

            var controller;

            if (panelDesc.controller) {
                controller = panelDesc.controller;
            } else {
                controller = "modelmonitorcontroller";
            }

            var html = tp({
                id: id,
                name: panelDesc.name,
                modeltype: panelDesc.type,
                monitortemplate: template,
                controller: controller,
                datas: serDatas
            });

            html = $(html);

            if (panelDesc.css) {
                html.addClass(panelDesc.css);
            }

            html.addClass(id);
            html.addClass("displayer-panel");

            $("#" + panelDesc.containerid, panelsSet.template).append(html);
        };
    }
});