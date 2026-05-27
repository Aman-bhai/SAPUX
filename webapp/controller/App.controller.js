sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("my.app.controller.App", {

    onInit: function () {
      // App container initialized
      console.log("✅ App controller loaded");
    }

  });
});
