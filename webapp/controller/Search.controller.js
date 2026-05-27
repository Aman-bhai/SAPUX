sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.Search", {

    onInit: function () {
      this.getOwnerComponent().getRouter()
        .getRoute("search")
        .attachMatched(this._onMatched, this);
    },

    _onMatched: function (oEvent) {
      var oQuery = oEvent.getParameter("arguments")["?query"];
      var aFilters = [];

      if (oQuery && oQuery.category) {
        aFilters.push(new Filter("category", FilterOperator.EQ, oQuery.category));
      }

      var oList = this.byId("list");
      var oBinding = oList.getBinding("items");
      oBinding.filter(aFilters);
    },

    onBack: function () {
      window.history.go(-1);
    }

  });
});