sap.ui.define([
    "sap/ui/core/XMLComposite"
], function (XMLComposite) {
    "use strict";

    return XMLComposite.extend("sap.practice.practice.control.MyButton", {
        metadata: {
            properties: {
                text: {
                    type: "string",
                    defaultValue: ""
                },
                type: {
                    type: "string",
                    defaultValue: "Default"
                }
            },
            events: {
                press: {}
            }
        },

        onPress: function (oEvent) {
            this.firePress();
        }
    });
});