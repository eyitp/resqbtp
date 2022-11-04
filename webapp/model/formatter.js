sap.ui.define([], function () {
	"use strict";
	return {
        returnAutomateIcon: function (value) {
			if(value === "Semi-Automatic")
            {
                value = "sap-icon://learning-assistant";
                return value;
            }
            else if(value === "Automatic") {
                value = "sap-icon://activate";
                return value;
            }
            else if(value === "Completed") {
                value = "sap-icon://checklist-item-2";
                return value;
            }
            else{
                value = "sap-icon://person-placeholder";
                return value;
            }
			
		},
        returnGFFieldIcon: function (value) {
            if(value === "Completed") {
                value = "sap-icon://checklist-item-2";
                return value;
            }
            else{
                //value = "sap-icon://share-2";
                value = "sap-icon://share-2";
                return value;
            }
        }
    };
});