sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/practice/practice/localService/mockserver"
], function (UIComponent, ODataModel, mockserver
) {
    "use strict";
    return UIComponent.extend("sap.practice.practice.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {

            // Start Mock Server FIRST
            mockserver.init();

            // Call parent
            UIComponent.prototype.init.apply(this,
                arguments
            );

            // THEN create OData model
            var oModel = new ODataModel(
                "mockserver/",
                {
                    useBatch: false
                }
            );

            this.setModel(oModel);

            console.log("OData Model Created");
        }
    }
    );
});