/**
 * Created by Christophe on 05/09/2016.
 */

define(["modelmanager", "loadingmanager", "monitorpanelsset"]
    , function (ModelManager, LoadingManager, MonitorPanelsSet) {


        return function (mainApp, modelDescriptorJson, monitorDesc, loadedFunction) {
            var panelsSets = {};

            var t = this;
            this.modelManager = new ModelManager();
            this.modelManager.init(modelDescriptorJson);

            // voir si il existe une manière plus judicieuse de rendre dispo le modelManager
            //Tentacle.modelManager = modelManager;

            // chargement des templates
            var loadingManager = new LoadingManager();

            for (var setId in monitorDesc.sets) {
                loadingManager.addFile(monitorDesc.sets[setId].template);
            }

            loadingManager.load(function (datas) {
                defaultSetId = monitorDesc.defaultset;

                for (var setId in monitorDesc.sets) {
                    var panelsSet = new MonitorPanelsSet(setId, monitorDesc.sets[setId], datas[monitorDesc.sets[setId].template]);
                    panelsSet.init();
                    panelsSets[setId] = panelsSet;
                }

                // initialisation du router
                mainApp.config(['$routeProvider',
                    function ($routeProvider) {

                        for (var setId in panelsSets) {
                            $routeProvider.when("/" + setId, {
                                template: panelsSets[setId].template,
                                controller: 'panelcontroller'
                            });
                        }

                        $routeProvider.when("/sceneeditor", {
                            templateUrl: "includes/panels/sceneeditor.html",
                            controller: ""
                        });

                        $routeProvider.when("/grapheditor", {
                            template: "includes/panels/grapheditor.html",
                            controller: ""
                        });

                        $routeProvider.otherwise({
                            redirectTo: '/' + defaultSetId
                        });
                    }]);

                t.modelManager.loadModel("base");

                loadedFunction();

                angular.bootstrap(document, ["monitoring-panel"]);
            });
        }
    });