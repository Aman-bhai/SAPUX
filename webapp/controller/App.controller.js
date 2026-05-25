sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.practice.practice.controller.App", {
getApp: function () {
    return this.byId("app");
},

onBack: function () {
    this.getApp().back();
},

goToFlex: function () { this.getApp().to(this.byId("page2")); },
goToGrid: function () { this.getApp().to(this.byId("page3")); },
goToPanel: function () { this.getApp().to(this.byId("page4")); },
goToToolbar: function () { this.getApp().to(this.byId("page5")); },
goToVBox: function () { this.getApp().to(this.byId("page6")); },
goToHBox: function () { this.getApp().to(this.byId("page7")); },
goToScroll: function () { this.getApp().to(this.byId("page8")); },
goToSplitter: function () { this.getApp().to(this.byId("page9")); },
goToForm: function () { this.getApp().to(this.byId("page10")); }

    });
});
