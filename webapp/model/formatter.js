sap.ui.define([], function () {
    "use strict";

    return {

        // Just formats whatever user types
        formatName: function (sValue) {
            if (!sValue) {
                return "";
            }
            return "Entered: " + sValue.toUpperCase();
        }

    };
});