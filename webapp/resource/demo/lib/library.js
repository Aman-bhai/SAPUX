sap.ui.define(["sap/ui/core/library"], function () {
    "use strict";

    sap.ui.getCore().initLibrary({
        name: "lib",
        version: "1.0.0",
        dependencies: ["sap.ui.core"],
        noLibraryCSS: true
    });

    return lib;
});
