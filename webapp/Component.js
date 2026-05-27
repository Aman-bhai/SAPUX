sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
  "use strict";

  return UIComponent.extend("sap.practice.practice.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // Load dummy data
    var oModel = new JSONModel(
  sap.ui.require.toUrl("sap/practice/practice/model/data.json")
);
this.setModel(oModel);


      this.getRouter().initialize();
    }
  });
});