sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.practice.practice.controller.App", {

        onInit: function () {

            // ✅ Create JSON Model inside controller
            var oData = {
                name: "Aman",
                age: 22,
                salary: 50000,
                items: [
                    { product: "Laptop", quantity: 2 },
                    { product: "Phone", quantity: 5 }
                ]
            };

            var oModel = new JSONModel(oData);

            // ✅ Set model to view (default model)
            this.getView().setModel(oModel);
        },

        // ✅ Formatter Function
        formatCurrency: function (value) {
            if (!value) {
                return "";
            }
            return "₹ " + value;
        },

        // ✅ Two-way Binding Trigger
        onInputChange: function (oEvent) {
            var value = oEvent.getParameter("value");
            console.log("Updated Name:", value);
        },

        // ✅ Modify Model Data
        onIncreaseSalary: function () {
            var oModel = this.getView().getModel();

            var currentSalary = oModel.getProperty("/salary");
            oModel.setProperty("/salary", currentSalary + 5000);
        }

    });
});