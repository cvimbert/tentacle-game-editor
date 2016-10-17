/* global Tentacle, Localization, _ */

define ([
    "underscore",
    "jquery",
    "localization",
    "constants"
], function(
    _,
    $,
    Localization,
    Constants
) {
    return function ($scope, $location, shared) {

        var defaultLanguage = "fr";
        $scope.backItemsStack = [];

        var pendingItems = [];

        var modalOptions = {
            backdrop: "static",
            keyboard: false
        };

        // TODO: doit pouvoir être remplacé par autre chose
        $scope.$on("editItem", function (event, args) {
            $scope.item = args.item;

            $scope.descriptor = shared.modelManager.getClassDescriptor($scope.item.type).flattenByItem($scope.item);
            $scope.descid = $scope.item.type;

            if (!args.pushInStack)
                $scope.backItemsStack.push($scope.item);

            if (args.pending)
                pendingItems[$scope.item.uid] = args.pending;

            $("#modal-desc").modal(modalOptions);
        });


        shared.editItem = function (uid) {
            var item = shared.modelManager.getModelByUid(uid);
            $scope.editItemByItem(_.clone(item));
        };

        $scope.editItem = shared.editItem;

        shared.editItemByItem = function (item, isback) {

            // attention, ici pas de clone, donc pas de données temporaires d'item

            var args = {
                item: item,
                descriptor: shared.modelManager.getClassDescriptor(item.type).flattenByItem(item),
                pushInStack: isback
            };

            $scope.$emit("editItem", args);
        };

        $scope.editItemByItem = shared.editItemByItem;

        $scope.navigateTo = function (panelsSetId) {
            $location.path("/" + panelsSetId);
        };

        $scope.closeEditionModal = function () {
            $scope.backItemsStack = [];
            clearPendingItems();
            $("#modal-desc").modal("hide");
        };

        $scope.addItemToCollection = function (uid, targetItemAttribute) {
            if (uid && targetItemAttribute) {
                targetItemAttribute.push(uid);
            }
        };

        function clearPendingItems() {
            pendingItems = {};
        }

        $scope.getLocString = function (id) {
            if (!id) {
                return "";
            }

            if (Localization[defaultLanguage][id.toLowerCase()]) {
                return Localization[defaultLanguage][id.toLowerCase()];
            } else {
                return "!!" + id + "!!";
            }
        };


        $scope.attributeSetSelected = function () {
            $scope.item.mutate();

            if (pendingItems[$scope.item.uid]) {
                pendingItems[$scope.item.uid].added = $scope.item;
            }

            // on remplace l'objet courant dans la stack
            $scope.backItemsStack[$scope.backItemsStack.length - 1] = $scope.item;

            $scope.descriptor = shared.modelManager.getClassDescriptor($scope.descid).flattenByItem($scope.item);
        };

        $scope.getReferences = function (targetDescid) {
            var mod = shared.modelManager.getModelById(targetDescid);
            return mod;
        };

        $scope.validate = function () {
            validatePendingItem($scope.item.uid);
            shared.modelManager.saveObject($scope.descid, $scope.item);
        };

        $scope.isInCollection = function(item, attributeId, refId) {
            if (!item.attributes[attributeId]) return true;
            return item.attributes[attributeId].lastIndexOf(refId) === -1;
        };

        $scope.getReferencesCollection = function (item, attribute) {

            // ceci est peut-être à supprimer pour un truc plus souple

            if (attribute.referencetype === "linkedcollection") {

                var ret = {};

                if (item.get(attribute.linkedcollectionattribute)) {
                    var linkedItemAttribute = item.get(attribute.linkedcollectionattribute);
                    var litem = shared.modelManager.getModelByUid(linkedItemAttribute);

                    var itemValues = litem.get(attribute.linkedcollectionattributevalue);

                    _.each(itemValues, function (itemUid) {
                        var it = shared.modelManager.getModelByUid(itemUid);
                        ret[itemUid] = it;
                    });
                }

                return ret;

            } else {

                if (_.isArray(attribute.referencetype)) {
                    var models = {};

                    _.each(attribute.referencetype, function(reftype) {
                        var tempModels = shared.modelManager.getModelByType(reftype);

                        // temporaire, en attendant de pouvoir lire la doc
                        _.each(tempModels, function(model, uid) {
                            models[uid] = model;
                        });
                    });

                    return models;
                } else {
                    return shared.modelManager.getModelByType(attribute.referencetype);
                }
            }

            return {};
        };

        $scope.goBack = function () {

            deletePendingItem($scope.item.uid);

            // attention, erreur là dedans
            if ($scope.backItemsStack.length > 1) {
                var it = $scope.backItemsStack.pop();
                $scope.editItemByItem($scope.backItemsStack[$scope.backItemsStack.length - 1], true);
            } else {
                $scope.closeEditionModal();
            }
        };

        function deletePendingItem(uid) {
            delete pendingItems[uid];
        }

        function validatePendingItem(uid) {

            if (pendingItems[uid]) {
                var pitem = pendingItems[uid];

                var toDesc = shared.modelManager.getClassDescriptor(pitem.addto.type).getRaw();
                var toType = toDesc.attributes[pitem.addin].type;

                if (pitem.type === "reference") {
                    if (toType === "collection") {
                        pitem.addto.attributes[pitem.addin].push($scope.item.uid);
                    } else if (toType === "reference") {
                        pitem.addto.attributes[pitem.addin] = $scope.item.uid;
                    }
                }

                if (pitem.type === "object") {
                    if (toType === "collection") {
                        pitem.addto.attributes[pitem.addin].push(pitem.added);
                    } else if (toType === "reference") {
                        pitem.addto.attributes[pitem.addin] = pitem.added;
                    }
                }
            }
        }

        $scope.invertCollectionItemPositions = function(item, attributeid, $index1, $index2, $event) {
            var collection = item.get(attributeid);

            // attention : pas de vérification de la validité des indexs
            var tmp = collection[$index1];
            collection[$index1] = collection[$index2];
            collection[$index2] = tmp;

            $event.stopPropagation();
        };

        $scope.goUp = function(item, attributeid, $index, $event) {
            $scope.invertCollectionItemPositions(item, attributeid, $index, $index - 1, $event);
        };

        $scope.goDown = function(item, attributeid, $index, $event) {
            $scope.invertCollectionItemPositions(item, attributeid, $index, $index + 1, $event);
        };

        $scope.deleteItemFromCollection = function (index, targetItemAttribute, $event) {
            targetItemAttribute.splice(index, 1);

            if ($event) $event.stopPropagation();
        };

        $scope.validateAndGoBack = function () {
            $scope.validate();
            $scope.goBack();
        };

        $scope.getNameByUid = function (uid) {
            var item = shared.modelManager.getModelByUid(uid);
            return $scope.getName(item);
        };

        $scope.closeEditionModal = function () {
            $scope.backItemsStack = [];
            clearPendingItems();
            $("#modal-desc").modal("hide");
        };


        shared.addReferenceItem = function (descid, addto, addin) {
            var item = shared.modelManager.addModel(descid, false);

            var pitem;
            if (addto && addin && $scope.item.uid) {
                pitem = {addto: addto, addin: addin, added: item.uid, type: "reference"};
            }

            var args = {
                item: item,
                descriptor: shared.modelManager.getClassDescriptor(item.type).flattenByItem(item),
                pushInStack: false,
                pending: pitem
            };

            $scope.$emit("editItem", args);
        };

        $scope.addReferenceItem = shared.addReferenceItem;


        // utilisé deux fois, voir si on peut mutualiser
        shared.getName = function (item, defaultvalue) {
            if (item.get("name")) {
                return item.get("name");
            } else {
                if (defaultvalue !== undefined) {
                    return defaultvalue;
                } else {
                    return item.uid;
                }
            }
        };

        $scope.getName = shared.getName;

        $scope.save = function () {
            shared.modelManager.saveToStorage("base");
        };

        $scope.load = function () {
            shared.modelManager.loadModel("base");
        };

    };
});