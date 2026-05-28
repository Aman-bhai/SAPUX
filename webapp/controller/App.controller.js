sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "lib/MachineLogic",
    "sap/m/MessageToast"
], function (Controller, MachineLogic, MessageToast) {

    "use strict";

    return Controller.extend("sap.practice.practice.controller.App", {

        onInit: function () {
            console.log("Library Loaded Successfully");
        },

        onRefresh: function () {
            var sStatus = MachineLogic.getMachineStatus();
            var sTemp = MachineLogic.getTemperature();

            MessageToast.show("Status : " + sStatus + " | Temp : " + sTemp);
        }

    });
});