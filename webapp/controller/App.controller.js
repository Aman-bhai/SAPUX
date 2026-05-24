sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.practice.practice.controller.App", {

        onInit: function () {
            MessageToast.show("App Loaded ✅");
        },

        // ✅ Go to Page 2
        onGoToPage2: function () {
            var oApp = this.getView().byId("app");
            var oPage2 = this.getView().byId("page2");

            oApp.to(oPage2);
            MessageToast.show("Navigated to Page 2 🚀");
        },

        // ✅ Back
        onGoBack: function () {
            var oApp = this.getView().byId("app");

            oApp.back();
            MessageToast.show("Went Back ⬅️");
        },

        // ✅ Back to specific page
        onBackToPage1: function () {
            var oApp = this.getView().byId("app");

            oApp.backToPage(this.getView().byId("page1"));
            MessageToast.show("Back to Page 1 🎯");
        },

        // ✅ Back to top
        onBackToTop: function () {
            var oApp = this.getView().byId("app");

            oApp.backToTop();
            MessageToast.show("Back to Top 🔝");
        },

        // ✅ Get current page
        onGetCurrentPage: function () {
            var oApp = this.getView().byId("app");
            var oCurrent = oApp.getCurrentPage();

            MessageToast.show("Current: " + oCurrent.getId());
        },

        // ✅ Add dynamic page WITH BACK BUTTON
        onAddPage: function () {
            var oApp = this.getView().byId("app");

            var oNewPage = new sap.m.Page({
                title: "New Page",

                showNavButton: true,
                navButtonPress: function () {
                    oApp.back();
                },

                content: [
                    new sap.m.Text({ text: "Dynamic Page ✅" })
                ]
            });

            oApp.addPage(oNewPage);
            oApp.to(oNewPage);

            MessageToast.show("New Page Added ✅");
        },

        // ✅ Remove page2
        onRemovePage2: function () {
            var oApp = this.getView().byId("app");
            var oPage2 = this.getView().byId("page2");

            oApp.removePage(oPage2);

            MessageToast.show("Page 2 Removed ❌");
        }

    });
});
