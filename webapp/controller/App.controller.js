sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {

  "use strict";

  return Controller.extend(
    "sap.practice.practice.controller.App",
    {

      onInit: function () {

        console.log("App Loaded");

      }
    }
  );
});