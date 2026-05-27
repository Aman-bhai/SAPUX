sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.App", {

    onPress: function () {
      var oBundle = this.getView().getModel("i18n").getResourceBundle();

      var sText = oBundle.getText("greeting", ["Aman"]);
      MessageToast.show(sText);
    }

  });
});
