/**
 * Created by Christophe on 07/09/2016.
 */
require.config({
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        shim: {
            angularRoute: {
                deps: ['angular'],
                exports: 'angular'
            },
            angularSanitize: {
                deps: ['angular'],
                exports: 'angular'
            },
            angular: {
                exports: 'angular'
            }
        }
    },
    paths: {
        underscore: 'bower_components/underscore/underscore',
        modelmanager: 'src/model-manager/modelmanager',
        modeldescriptor: 'src/model-manager/modeldescriptor',
        gameobject: 'src/game/common/gameobject',
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
        sortablelistdirective: 'src/model-monitor/directives/sortablelist',
        Draggable: 'bower_components/gsap/src/uncompressed/utils/Draggable',
        CSSPlugin: 'bower_components/gsap/src/uncompressed/plugins/CSSPlugin',
        TweenLite: 'bower_components/gsap/src/uncompressed/TweenLite',
        toolbarpanelcontroller: 'src/controllers/toolbar',
        localization: 'data/localisation',
        console: 'src/controllers/console',
        contenteditable: 'src/directives/contenteditable',
        selectable: 'src/directives/selectable',
        displayobject: 'src/game/display/displayobject',
        gamemanager: 'src/game/gamemanager',
        sprite: 'src/game/display/sprite',
        spritesgroup: 'src/game/display/spritesgroup',
        groupstate: 'src/game/display/groupstate',
        sequence: 'src/game/spriteslogic/sequence',
        variable: 'src/game/gamelogic/variable',
        condition: 'src/game/gamelogic/condition',
        gameconsole: 'src/game/gameconsole',
        displayobjectdirective: 'src/directives/displayobject',
        controldirective: 'src/directives/control',
        control: 'src/game/gamelogic/control',
        conditionalgroupstate: 'src/game/spriteslogic/conditionalgroupstate',
        conditionalgroupstateset: 'src/game/spriteslogic/conditionalgroupstateset',
        eventdispatcher: 'src/game/common/eventdispatcher',
        action: 'src/game/gamelogic/action',
        trigger: 'src/game/gamelogic/trigger',
        triggers: 'src/game/gamelogic/triggers',
        controlsprite: 'src/game/display/controlsprite',
        clock: 'src/game/gamelogic/clock',
        graphs: 'src/game/graphs',
        randomgenerator: 'src/game/common/randomgenerator',
        actions: 'src/game/gamelogic/actions',
        conditions: 'src/game/gamelogic/conditions',
        testii: 'src/game',
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular-route/angular-route',
        angularSanitize: 'bower_components/angular-sanitize/angular-sanitize',
        app: "app"

    }
});
