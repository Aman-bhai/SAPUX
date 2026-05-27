sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {

    "use strict";

    return {

        init: function () {

            var oMockServer = new MockServer({
                rootUri: "mockserver/"
            });

            var sPath = sap.ui.require.toUrl(
                "sap/practice/practice/localService"
            );

            oMockServer.simulate(
                sPath + "/metadata.xml",
                {
                    sMockdataBaseUrl:
                        sPath + "/mockdata",

                    bGenerateMissingMockData: false
                }
            );

            oMockServer.start();

            console.log("Mock Server Started");
        }
    };
});