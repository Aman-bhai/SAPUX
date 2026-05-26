sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("sap.practice.practice.controller.App", {

    // ✅ INIT MODEL
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
        notifications: true,
        skills: [],
        priority: ""
      });

      this.getView().setModel(oModel);
    },

    // ✅ RADIO BUTTON
    onFrequencyChange: function (oEvent) {
      var oGroup = oEvent.getSource();
      var index = oGroup.getSelectedIndex();
      if (index !== -1) {
        var text = oGroup.getButtons()[index].getText();
        this.getView().getModel().setProperty("/frequency", text);
      }
    },

    // ✅ COMBOBOX
    onCategoryChange: function (oEvent) {
      var item = oEvent.getParameter("selectedItem");
      if (item) {
        this.getView().getModel().setProperty("/category", item.getKey());
      }
    },

    // ✅ CHECKBOX (MULTI SELECT ARRAY)
    onCheckBoxSelect: function (oEvent) {
      var text = oEvent.getSource().getText();
      var selected = oEvent.getParameter("selected");

      var aInterests = this.getView().getModel().getProperty("/interests") || [];

      if (selected) {
        if (!aInterests.includes(text)) {
          aInterests.push(text);
        }
      } else {
        aInterests = aInterests.filter(function (item) {
          return item !== text;
        });
      }

      this.getView().getModel().setProperty("/interests", aInterests);
    },

    // ✅ MULTI COMBOBOX
    onMultiSelect: function (oEvent) {
      var aItems = oEvent.getParameter("selectedItems");

      var aValues = aItems.map(function (item) {
        return item.getText();
      });

      this.getView().getModel().setProperty("/skills", aValues);
    },

    // ✅ FILE UPLOAD
    onFileChange: function (oEvent) {
      var file = oEvent.getParameter("files")[0];

      if (file) {
        this.getView().getModel().setProperty("/file", file.name);
      }
    },

    // ✅ SWITCH TOGGLE
    onSwitchChange: function (oEvent) {
      var state = oEvent.getParameter("state");
      this.getView().getModel().setProperty("/notifications", state);
    },

    // ✅ SUBMIT BUTTON
    onSubmit: function () {
      var oData = this.getView().getModel().getData();

      console.log("FORM DATA:", oData);

      MessageToast.show("Form Submitted Successfully ✅");
    }

  });
});