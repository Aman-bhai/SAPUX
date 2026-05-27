sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.Home", {

    onGoDetail: function () {
      this.getOwnerComponent().getRouter().navTo("detail");
    },

    onGoSearch: function () {
      this.getOwnerComponent().getRouter().navTo("search");
    }

  });
});