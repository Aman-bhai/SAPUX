sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("sap.practice.practice.Component", {
        metadata: {
            rootView: {
                viewName: "sap.practice.practice.view.App",
                type: "XML",
                async: true
            }
        }
    });
});