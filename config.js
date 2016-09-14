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
        modelmanager: 'src/model-manager/modelmanager',
        modeldescriptor: 'src/model-manager/modeldescriptor',
        model: 'src/model-manager/model',
        logger: 'src/model-manager/logger',
        filter: 'src/model-manager/filter',
        filtersset: 'src/model-manager/filtersset',
        constants: 'src/model-manager/constants',
        jquery: 'bower_components/jquery/dist/jquery',
        loadingmanager: 'src/model-monitor/loadingmanager',
        monitorbutton: 'src/model-monitor/monitorbutton',
        monitorpanel: 'src/model-monitor/monitorpanel',
        monitorpanelsset: 'src/model-monitor/monitorpanelsset',
        monitoringapp: 'src/model-monitor/monitoringapp',
        uuid: 'node_modules/node-uuid/uuid',
        modelmonitorcontroller: 'src/model-monitor/controllers/modelmonitorcontroller',
        panelcontroller: 'src/model-monitor/controllers/panelcontroller',
        panelscontroller: 'src/model-monitor/controllers/panelscontroller',
        spritespanelcontroller: 'src/model-monitor/controllers/spritespanelcontroller',
        draggabledirective: 'src/model-monitor/directives/draggable',
        toolbarpanelcontroller: 'src/controllers/toolbar',
        localization: 'data/localisation',
        console: 'src/controllers/console',
        contenteditable: 'src/directives/contenteditable',
        selectable: 'src/directives/selectable',
        displayobject: 'src/game/display/displayobject',
        gamemanager: 'src/game/gamemanager',
        sprite: 'src/game/display/sprite',
        spritesgroup: 'src/game/display/spritesgroup',
        gameconsole: 'src/game/gameconsole'
    }
});
