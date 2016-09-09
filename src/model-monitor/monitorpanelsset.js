/**
 * Created by Christophe on 02/09/2016.
 */
(function(factory) {

    var root = (typeof self == 'object' && self.self === self && self) ||
        (typeof global == 'object' && global.global === global && global);

    if (typeof define === 'function' && define.amd) {
        define(["jquery", "monitorpanel", "monitorbutton"], function($, MonitorPanel, MonitorButton) {
            return factory($, MonitorPanel, MonitorButton);
        });
    } else {
        root.TentacleMonitorPanelsSet = factory(root.$, root.TentacleMonitorPanel, root.TentacleMonitorButton);
    }

})(function($, MonitorPanel, MonitorButton) {

    return function (id, panelDesc, htmlTemplate) {
        this.template = $(htmlTemplate);

        this.init = function () {
            for (var uPanelId in panelDesc.panels) {
                var uPanelDesc = panelDesc.panels[uPanelId];

                var panel = new MonitorPanel(uPanelId, uPanelDesc, this);
                panel.create();
            }

            for (var buttonId in panelDesc.buttons) {
                var buttonDesc = panelDesc.buttons[buttonId];

                var button = new MonitorButton(buttonId, buttonDesc, this);
                button.create();
            }

            if (panelDesc.css) {
                this.template.addClass(panelDesc.css);
            }

            this.template.addClass(id);
            this.template = this.template.html();

            if (panelDesc.title) {
                $("#title", this.template).append(panelDesc.title);
            }
        };
    }
});