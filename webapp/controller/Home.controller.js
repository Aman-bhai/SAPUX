sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.Home", {
onSelectionChange: function (oEvent) {

  // ✅ Get selected item (CORRECT)
  var oItem = oEvent.getParameter("listItem");

  // ✅ Get data from binding context
  var sName = oItem.getBindingContext().getProperty("name");
  var sId = oItem.getBindingContext().getProperty("id");

  console.log("🛒 Selected Item:", sName);

  // ✅ Navigate
  this.getOwnerComponent().getRouter().navTo("detail", {
    id: sId
  });
},


    onSearch: function () {
      this.getOwnerComponent().getRouter().navTo("search", {
        query: {
          category: "Electronics"
        }
      });
    }

  });
});