sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/practice/practice/model/formatter",
    "sap/ui/model/json/JSONModel"
], function (Controller, formatter, JSONModel) {
    "use strict";

    return Controller.extend("sap.practice.practice.controller.App", {

        formatter: formatter,

        onInit: function () {
            // Empty model → user will fill it
            var oModel = new JSONModel({
                name: ""
            });
            this.getView().setModel(oModel);
        }

    });
});
