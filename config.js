/**
 * Created by Christophe on 07/09/2016.
 */
require.config({
    shim: {
        jquery: {
            exports: 'jQuery'
        }
    },
    paths: {
        underscore: 'bower_components/underscore/underscore',
        modelmanager: 'bower_components/tentacle-model-manager/src/modelmanager',
        modeldescriptor: 'bower_components/tentacle-model-manager/src/modeldescriptor',
        model: 'bower_components/tentacle-model-manager/src/model',
        logger: 'bower_components/tentacle-model-manager/src/logger',
        filter: 'bower_components/tentacle-model-manager/src/filter',
        filtersset: 'bower_components/tentacle-model-manager/src/filtersset',
        constants: 'bower_components/tentacle-model-manager/src/constants',
        jquery: 'bower_components/jquery/dist/jquery',
        loadingmanager: 'bower_components/tentacle-model-monitor/src/loadingmanager',
        monitorbutton: 'bower_components/tentacle-model-monitor/src/monitorbutton',
        monitorpanel: 'bower_components/tentacle-model-monitor/src/monitorpanel',
        monitorpanelsset: 'bower_components/tentacle-model-monitor/src/monitorpanelsset',
        monitoringapp: 'bower_components/tentacle-model-monitor/src/monitoringapp',
        uuid: 'node_modules/node-uuid/uuid',
        modelmonitorcontroller: 'bower_components/tentacle-model-monitor/src/controllers/modelmonitorcontroller',
        panelcontroller: 'bower_components/tentacle-model-monitor/src/controllers/panelcontroller',
        panelscontroller: 'bower_components/tentacle-model-monitor/src/controllers/panelscontroller',
        spritespanelcontroller: 'bower_components/tentacle-model-monitor/src/controllers/spritespanelcontroller',
        draggabledirective: 'bower_components/tentacle-model-monitor/src/directives/draggable',
        toolbarpanelcontroller: 'src/controllers/toolbar',
        localization: 'data/localisation'
    }
});
