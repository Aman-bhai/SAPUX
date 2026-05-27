sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.Detail", {

    onBack: function () {
      this.getOwnerComponent().getRouter().navTo("home");
    }

  });
});
