sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast","sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {

  "use strict";

  return Controller.extend("sap.practice.practice.controller.App", {

    // ✅ OPEN DIALOG
    onOpenDialog: async function () {

      // Lazy loading fragment
      if (!this._oDialog) {
        this._oDialog = await this.loadFragment({
          name: "sap.practice.practice.fragment.MyDialog"
        });
      }

      this.getView().addDependent(this._oDialog);
      this._oDialog.open();
    },



    // ✅ CANCEL BUTTON
    onCancel: function () {
      this._oDialog.close();
    },



    // ✅ SUBMIT BUTTON
    onSubmitDialog: function () {
      MessageToast.show("You have submitted the dialog!");
      this._oDialog.close();
    },



    onOpenPopover: async function (e) {
      var source=e.getSource();
      // Lazy loading fragment
      if (!this._oPopover) {
        this._oPopover = await this.loadFragment({
          name: "sap.practice.practice.fragment.MyPopOver"
        });
      }

      this.getView().addDependent(this._oPopover);
      this._oPopover.openBy(source);
    },



    onClosePopover: function () {
      this._oPopover.close();
    },



    onOpenMessageBox: function () {
      MessageBox.confirm("Are you sure you want to proceed?", {
        title: "Confirmation",
        actions: [MessageBox.Action.OK, MessageBox.Action.NO],
        emphasizedAction: MessageBox.Action.OK,
        onClose: function (sAction) {
          if (sAction === MessageBox.Action.OK) {
            MessageToast.show("You chose OK!");
          } else {
            MessageToast.show("You chose NO!");
          }
        }
      });
    }





  });
});
