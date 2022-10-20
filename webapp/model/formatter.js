sap.ui.define([], function () {
	"use strict";
	return {
        returnAutomateIcon: function (value) {
			if(value === "Semi-Automatic")
            {
                value = "sap-icon://save";
                return value;
            }
            else if(value === "Automatic") {
                value = "sap-icon://SAP-icons-TNT/process-package";
                return value;
            }
            else{
                value = "sap-icon://SAP-icons-TNT/manual-task";
                return value;
            }
			
		}
    };
});