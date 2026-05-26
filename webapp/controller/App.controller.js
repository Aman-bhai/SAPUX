sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/model/Sorter"
], function (Controller, JSONModel, MessageToast, Filter, FilterOperator, Sorter) {

  "use strict";

  return Controller.extend("sap.practice.practice.controller.App", {

    // ✅ APP START
    onInit: function () {

      var oData = {
        products: [
          { productId: 101, name: "iPhone", price: 70000, brand: "Apple" },
          { productId: 102, name: "Galaxy", price: 75000, brand: "Samsung" },
          { productId: 103, name: "Sony Headset", price: 30000, brand: "Sony" },
          { productId: 104, name: "Dell Laptop", price: 60000, brand: "Dell" }
        ]
      };

      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);

      this._aFilters = [];
      this._oSorter = new Sorter("price", false);

      this.getView().addEventDelegate({
        onAfterRendering: function () {
          this._apply();
        }.bind(this)
      });
    },



    // ✅ APPLY FILTER + SORT
    _apply: function () {
      var oTable = this.byId("yourTableId");
      var oBinding = oTable.getBinding("rows");

      if (oBinding) {
        oBinding.filter(this._aFilters);
        oBinding.sort(this._oSorter);
      }
    },



    // ✅ SEARCH
    onSearch: function (oEvent) {

      var sQuery = oEvent.getParameter("newValue");
      this._aFilters = [];

      if (sQuery) {
        this._aFilters.push(
          new Filter("name", FilterOperator.Contains, sQuery)
        );
      }

      this._apply();
    },



    // ✅ FILTER
    onFilterCategory: function (oEvent) {

      var sKey = oEvent.getSource().getSelectedKey();
      this._aFilters = [];

      if (sKey !== "All") {
        this._aFilters.push(
          new Filter("brand", FilterOperator.EQ, sKey)
        );
      }

      this._apply();
    },



    // ✅ SORT
    onSortByPrice: function () {

      this._bDesc = !this._bDesc;
      this._oSorter = new Sorter("price", this._bDesc);

      this._apply();

      MessageToast.show("Sorting Done ✅");
    },



    // ✅ ADD
    onAddProduct: function () {

      var oModel = this.getView().getModel();
      var aProducts = oModel.getProperty("/products");

      aProducts.push({
        productId: Date.now(),
        name: "New Product",
        price: 5000,
        brand: "Demo"
      });

      oModel.setProperty("/products", aProducts);

      MessageToast.show("Added ✅");
    },



    // ✅ DELETE
    onDeleteProduct: function () {

      var oTable = this.byId("yourTableId");
      var iIndex = oTable.getSelectedIndex();

      if (iIndex === -1) {
        MessageToast.show("Select a row ❌");
        return;
      }

      var oModel = this.getView().getModel();
      var aProducts = oModel.getProperty("/products");

      aProducts.splice(iIndex, 1);

      oModel.setProperty("/products", aProducts);

      MessageToast.show("Deleted ✅");
    },



    // ✅ UPDATE
    onUpdateProduct: function () {

      var oTable = this.byId("yourTableId");
      var iIndex = oTable.getSelectedIndex();

      if (iIndex === -1) {
        MessageToast.show("Select a row ❌");
        return;
      }

      var oContext = oTable.getContextByIndex(iIndex);
      var oProduct = oContext.getObject();

      oProduct.name = "Updated";
      oProduct.price += 1000;

      this.getView().getModel().refresh();

      MessageToast.show("Updated ✅");
    }

  });
});
