sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (BaseController, JSONModel, MessageToast) {
  "use strict";

  return BaseController.extend("sap.practice.practice.controller.App", {

    // ✅ Initialize model with all fields
    onInit: function () {
      var oModel = new JSONModel({
        username: "",
        email: "",
        password: "",
        surveyFeedback: "",
        frequency: "",
        category: "",
        interests: [],
        date: "",
        time: "",
        file: "",
        notifications: true
      });

      this.getView().setModel(oModel);
    },

    // ✅ Username live change
    onNameChange: function (oEvent) {
      var sValue = oEvent.getParameter("value");

      console.log("Username changed to:", sValue);
      this.getView().getModel().setProperty("/username", sValue);
    },

    // ✅ Handle RadioButton selection
    onFrequencyChange: function (oEvent) {
      var oGroup = oEvent.getSource();
      var index = oGroup.getSelectedIndex();
      var text = oGroup.getButtons()[index].getText();

      this.getView().getModel().setProperty("/frequency", text);
    },

    // ✅ Handle ComboBox selection
    onCategoryChange: function (oEvent) {
      var sValue = oEvent.getParameter("selectedItem").getText();
      this.getView().getModel().setProperty("/category", sValue);
    },

    // ✅ Handle Checkbox
    onCheckBoxSelect: function (oEvent) {
      var selected = oEvent.getSource().getText();
      var isChecked = oEvent.getParameter("selected");

      var aInterests = this.getView().getModel().getProperty("/interests");

      if (isChecked) {
        aInterests.push(selected);
      } else {
        aInterests = aInterests.filter(function (item) {
          return item !== selected;
        });
      }

      this.getView().getModel().setProperty("/interests", aInterests);
    },

    // ✅ Handle Switch
    onSwitchChange: function (oEvent) {
      var state = oEvent.getParameter("state");
      this.getView().getModel().setProperty("/notifications", state);
    },

    // ✅ Handle File Upload
    onFileChange: function (oEvent) {
      var file = oEvent.getParameter("files")[0];
      if (file) {
        this.getView().getModel().setProperty("/file", file.name);
      }
    },

    // ✅ Submit Button
    onLoginPress: function () {
      var oData = this.getView().getModel().getData();

      console.log("Form Data:", oData);

      MessageToast.show("Form Submitted Successfully!");
    }

  });
});
