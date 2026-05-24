sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"   // ✅ correct path
], (BaseController, MessageToast) => {
  "use strict";

  return BaseController.extend("sap.practice.practice.controller.App", {
      onInit() {
      },
      onPress() {
          MessageToast.show("Button pressed!");
      }
  });
});