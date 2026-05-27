

sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.Detail", {

    onInit: function () {
      this.getOwnerComponent().getRouter()
        .getRoute("detail")
        .attachMatched(this._onMatched, this);
    },

    _onMatched: function (oEvent) {
      var sId = oEvent.getParameter("arguments").id;
      var aProducts = this.getView().getModel().getProperty("/products");

      var oProduct = aProducts.find(p => p.id === sId);

      this.byId("productText")
        .setText(oProduct.name + " (" + oProduct.category + ")");
    },

    onBack: function () {
      window.history.go(-1);
    }

  });
});