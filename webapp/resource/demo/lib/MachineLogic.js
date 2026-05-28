sap.ui.define([], function () {
    "use strict";

    return {
        getMachineStatus: function () {
            return "Running";
        },

        getTemperature: function () {
            return (20 + Math.random() * 80).toFixed(1) + "°C";
        }
    };
});
