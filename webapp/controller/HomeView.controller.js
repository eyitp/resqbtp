sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    'sap/viz/ui5/format/ChartFormatter',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox, ChartFormatter) {
        "use strict";

        return Controller.extend("resq.controller.HomeView", {
            onInit: function () {
                this.editsystem = false;
                var AppConfig = {
                    "EDMXTableVisibility": false,
                    "EYAPIServAdaptMessage": "&lt;ul&gt; &lt;li&gt; Below Objects got generated successfully &lt;/li&gt;&lt;li&gt; Class Name: ZPROXY_SALES_API_CRUDQ &lt;/li&gt;&lt;li&gt; Class Name: ZPROXY_SALES_API_CRUDQ &lt;/li&gt;&lt;ul&gt;"
                }
                var oModel = new JSONModel(AppConfig);
                this.getView().setModel(oModel, "AppConfig");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "SelectedRow");

                var sPath = jQuery.sap.getModulePath("resq", "/model/navigations.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "NavigationModel");

                var sPath = jQuery.sap.getModulePath("resq", "/model/BuildOnCloudProcessFlow.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "BuildOnCloudProcessFlow");

                var sPath = jQuery.sap.getModulePath("resq", "/model/Users.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "Users");

                var sPath = jQuery.sap.getModulePath("resq", "/model/Systems.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "Systems");

                var sPath = jQuery.sap.getModulePath("resq", "/model/ColumnChart.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "ColumnChart");

                var sPath = jQuery.sap.getModulePath("resq", "/model/programs.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "Programs");

                var sPath = jQuery.sap.getModulePath("resq", "/model/CloudCompCheck.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "CloudCompCheck");

                var sPath = jQuery.sap.getModulePath("resq", "/model/UploadEDMXData.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "UploadedEDMX");


                this.userschema = {
                    "ID": "",
                    "Name": "",
                    "Role": "",
                    "Mail": "",
                    "Company": "",
                    "Status": ""
                }
                var oModel = new JSONModel(this.userschema);
                this.getView().setModel(oModel, "UserEdit");

                this.systemschema = {
                    "System": "",
                    "Version": "",
                    "ST": "",
                    "RFC": "",
                    "Status": ""
                }
                var oModel = new JSONModel(this.systemschema);
                this.getView().setModel(oModel, "SystemEdit");

                this.getOwnerComponent().getModel("AppConfig").setProperty("/selectedKey", "RESQ");
                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false)
                this.getOwnerComponent().getModel("AppConfig").refresh();
            },
            MigrateToBTPPress: function () {
                var oSelectedItem = this.getView().byId("idProgramsMigrat").getSelectedItem();
                var programName = oSelectedItem.getCells()[0].getProperty("text")
                var Programs = this.getView().getModel("Programs").getData();
                var i;
                var that = this;

                Programs.forEach((ovalue, index) => {
                    if (ovalue.Program === programName) {
                        ovalue.Status = "IP";
                        i = index;
                        that.getView().getModel("SelectedRow").setData(ovalue);
                    }
                }, this);
                this.getView().getModel("Programs").setData(Programs);
                this.getView().byId("CreateProductWizard").nextStep();
                this.setIntervalFunction(1, "CustomEntityChart", ["ServiceBindingChart", "ServiceDefinitionChart", "CustomQueryChart", "CustomEntityChart"], this);

            },
            setIntervalFunction(j, sIdChart, sIdNextChart, that) {

                var a = function () {
                    that.getView().byId(sIdChart).setPercentage(j);
                    that.getView().byId(sIdChart).rerender();
                    j++;
                    if (j == 101) {
                        clearInterval(that.MyInterval);
                        sIdNextChart.pop();
                        if (sIdNextChart.length > 0) {
                            that.getView().byId(sIdNextChart[sIdNextChart.length - 1]).setBusy(false);
                            that.setIntervalFunction(1, sIdNextChart[sIdNextChart.length - 1], sIdNextChart, that);
                        }
                        else {
                            that.getView().getModel("SelectedRow").setProperty("/Status", "C");
                            that.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", true)
                            // that.getView().byId("CreateProductWizard").nextStep();
                        }
                    }
                };
                this.MyInterval = setInterval(a, 30);
            },
            OnNextStepForFioriBuild:function(){
                this.getView().getModel("SelectedRow").setProperty("/Status", "IP");
                this.getView().byId("CreateProductWizard").nextStep();
                this.setIntervalFunction(1, "idFioriListReportCreationChart", ["idFioriTileConfigurationChart", "idFioriListReportCreationChart"], this);
            },
            OnBuildToCloudPress: function () {
                this.byId("pageContainer").to(this.getView().createId("TransToCloudBTP"));
                this.getView().byId("CreateProductWizard").nextStep();
            },
            OnBuildInBTPCloud: function () {
                this.byId("pageContainer").to(this.getView().createId("BuildInBTPCloud"));
            },
            OnBuildBack: function () {
                this.byId("pageContainer").to(this.getView().createId("Build"));
            },
            OnAnalyseProceed: function () {
                this.getView().byId("AnayseDetailWizard").nextStep();
            },
            OnDownloadReSQResult: function () {
                this.getView().byId("AnayseDetailWizard").nextStep();
            },
            onItemSelect: function (oEvent) {
                var oItem = oEvent.getParameter("item");
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
                if (oItem.getKey() === "Analyse") {
                    var card = this.getView().byId("AnalyseIntCard");
                }
            },
            OnDetailViewPress: function () {
                this.byId("pageContainer").to(this.getView().createId("AnalyseDetailView"));
                var currentStep = this.getView().byId("AnayseDetailWizard").getCurrentStep();
                if (currentStep === "container-resq---HomeView--AD1")
                    this.getView().byId("AnayseDetailWizard").nextStep();
                else
                    this.getView().byId("AnayseDetailWizard").goToStep("container-resq---HomeView--AD2");
            },
            handleUploadPress: function () {
                var AppConfig = this.getView().getModel("AppConfig").getData();
                AppConfig.EDMXTableVisibility = !AppConfig.EDMXTableVisibility
                this.getView().getModel("AppConfig").setData(AppConfig);
            },
            OnUploadEDMXProceed: function () {
                this.getView().byId("NewBuildInCloud").nextStep();
            },
            OnAnalyseDetailBack: function () {
                this.byId("pageContainer").to(this.getView().createId("Analyse"));
            },
            OnCheckCatchartPress: function () {
                var that = this;
                if (!this.CheckCatChartFrag) {
                    this.CheckCatChartFrag = this.loadFragment({
                        name: "resq.view.DetailPopup"
                    });
                }
                this.CheckCatChartFrag.then(function (oDialog) {
                    that.getView().setBusy(true);
                    oDialog.open();
                });
            },
            OnDetailPopupClose: function (oEvent) {
                this.getView().setBusy(false);
                oEvent.getSource().getParent().getParent().close();
            },
            OnSystemEdit: function (oEvent) {
                var that = this;
                if (!this.systemFrag) {
                    this.systemFrag = this.loadFragment({
                        name: "resq.view.system"
                    });
                }
                this.systemFrag.then(function (oDialog) {
                    that.getView().setBusy(true);
                    oDialog.open();
                });
                this.systemschema.System = oEvent.getSource().getParent().getParent().getCells()[0].getProperty("text");
                this.systemschema.Version = oEvent.getSource().getParent().getParent().getCells()[1].getProperty("text");
                this.systemschema.ST = oEvent.getSource().getParent().getParent().getCells()[2].getProperty("text");
                this.systemschema.RFC = oEvent.getSource().getParent().getParent().getCells()[3].getProperty("text");
                this.systemschema.Status = oEvent.getSource().getParent().getParent().getCells()[4].getProperty("text");
                this.getView().getModel("SystemEdit").setData(this.systemschema);
                this.editsystem = true;
            },
            OnSystemDelete: function (oEvent) {
                var sSystemName = oEvent.getSource().getParent().getParent().getCells()[0].getProperty("text");
                var that = this;
                this.getView().setBusy(true);
                MessageBox.confirm("Do yo want to delete " + sSystemName + " system?", {
                    title: "Confirm",                                    // default
                    onClose: function (oAction) {
                        that.getView().setBusy(false);
                        if (oAction === sap.m.MessageBox.Action.DELETE) {
                            var systems = that.getView().getModel("Systems").getData();
                            systems.forEach((ovalue, index) => {
                                if (ovalue.System === sSystemName) {
                                    systems.splice(index, 1);
                                }
                            }, that)
                            that.getView().getModel("Systems").setData(systems);
                        }
                    },
                    styleClass: "",                                      // default
                    actions: [sap.m.MessageBox.Action.DELETE,
                    sap.m.MessageBox.Action.CANCEL],         // default
                    emphasizedAction: sap.m.MessageBox.Action.DELETE,        // default
                    initialFocus: null,                                  // default
                    textDirection: sap.ui.core.TextDirection.Inherit     // default
                });
            },
            OnSystemCancel: function (oEvent) {
                this.getView().setBusy(false);
                this.editsystem = false;
                this.systemschema = {
                    "System": "",
                    "Version": "",
                    "ST": "",
                    "RFC": "",
                    "Status": ""
                }
                this.getView().getModel("SystemEdit").setData(this.systemschema);
                oEvent.getSource().getParent().close();
            },
            OnAddSystem: function () {
                var that = this;
                if (!this.systemFrag) {
                    this.systemFrag = this.loadFragment({
                        name: "resq.view.system"
                    });
                }
                this.systemFrag.then(function (oDialog) {
                    that.getView().setBusy(true);
                    oDialog.open();
                });
                this.getView().getModel("SystemEdit").setProperty("/Status", "Connected");
                this.getView().getModel("SystemEdit").setProperty("/ST", "Source");
            },
            OnSystemSave: function () {
                var oData = this.getView().getModel("SystemEdit").getData();
                var systems = this.getView().getModel("Systems").getData();
                if (this.editsystem) {
                    systems.forEach((ovalue) => {
                        if (ovalue.System === oData.System) {
                            ovalue.System = oData.System;
                            ovalue.Version = oData.Version;
                            ovalue.ST = oData.ST;
                            ovalue.RFC = oData.RFC;
                            ovalue.Status = oData.Status;
                        }
                    }, this)
                }
                else {
                    systems.push(oData);
                }
                this.getView().getModel("Systems").setData(systems);
                this.getView().byId("IdSystemCancel").firePress();
            },

            //******************************************************************************************* */
            OnUserEdit: function (oEvent) {
                var that = this;
                if (!this.UserFrag) {
                    this.UserFrag = this.loadFragment({
                        name: "resq.view.user"
                    });
                }
                this.UserFrag.then(function (oDialog) {
                    that.getView().setBusy(true);
                    oDialog.open();
                });
                this.userschema.ID = oEvent.getSource().getParent().getParent().getCells()[0].getProperty("text");
                this.userschema.Name = oEvent.getSource().getParent().getParent().getCells()[1].getProperty("text");
                this.userschema.Role = oEvent.getSource().getParent().getParent().getCells()[2].getProperty("text");
                this.userschema.Mail = oEvent.getSource().getParent().getParent().getCells()[3].getProperty("text");
                this.userschema.Company = oEvent.getSource().getParent().getParent().getCells()[4].getProperty("text");
                this.userschema.Status = oEvent.getSource().getParent().getParent().getCells()[5].getProperty("text");
                this.getView().getModel("UserEdit").setData(this.userschema);
                this.edituser = true;
            },
            OnUserDelete: function (oEvent) {
                var sID = oEvent.getSource().getParent().getParent().getCells()[0].getProperty("text");
                var sName = oEvent.getSource().getParent().getParent().getCells()[1].getProperty("text");
                var that = this;
                that.getView().setBusy(true);
                MessageBox.confirm("Do yo want to delete " + sID + "-" + sName + " User?", {
                    title: "Confirm",                                    // default
                    onClose: function (oAction) {
                        that.getView().setBusy(false);
                        if (oAction === sap.m.MessageBox.Action.DELETE) {

                            var users = that.getView().getModel("Users").getData();
                            users.forEach((ovalue, index) => {
                                if (ovalue.ID === sID) {
                                    users.splice(index, 1);
                                }
                            }, that)
                            that.getView().getModel("Users").setData(users);
                        }
                    },
                    styleClass: "",                                      // default
                    actions: [sap.m.MessageBox.Action.DELETE,
                    sap.m.MessageBox.Action.CANCEL],         // default
                    emphasizedAction: sap.m.MessageBox.Action.DELETE,        // default
                    initialFocus: null,                                  // default
                    textDirection: sap.ui.core.TextDirection.Inherit     // default
                });
            },
            OnUserCancel: function (oEvent) {
                this.getView().setBusy(false);
                this.edituser = false;
                this.userschema = {
                    "ID": "",
                    "Name": "",
                    "Role": "",
                    "Mail": "",
                    "Company": "",
                    "Status": ""
                }
                this.getView().getModel("UserEdit").setData(this.userschema);
                oEvent.getSource().getParent().close();
            },
            OnAddUser: function () {
                var that = this;
                if (!this.UserFrag) {
                    this.UserFrag = this.loadFragment({
                        name: "resq.view.user"
                    });
                }
                this.UserFrag.then(function (oDialog) {
                    that.getView().setBusy(true);
                    oDialog.open();
                });
                this.getView().getModel("UserEdit").setProperty("/Status", "Active");
            },
            OnUserSave: function () {
                var oData = this.getView().getModel("UserEdit").getData();
                var users = this.getView().getModel("Users").getData();
                if (this.edituser) {
                    users.forEach((ovalue) => {
                        if (ovalue.ID == oData.ID) {
                            ovalue.ID = oData.ID;
                            ovalue.Name = oData.Name;
                            ovalue.Role = oData.Role;
                            ovalue.Mail = oData.Mail;
                            ovalue.Company = oData.Company;
                            ovalue.Status = oData.Status;
                        }
                    }, this)
                }
                else {
                    users.push(oData);
                }
                this.getView().getModel("Users").setData(users);
                this.getView().byId("IdUserCancel").firePress();
            }


            // onSideNavButtonPress: function () {
            //     var oToolPage = this.byId("toolPage");
            //     var bSideExpanded = oToolPage.getSideExpanded();

            //     this._setToggleButtonTooltip(bSideExpanded);

            //     oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            // },
            // _setToggleButtonTooltip: function (bLarge) {
            //     var oToggleButton = this.byId('sideNavigationToggleButton');
            //     if (bLarge) {
            //         oToggleButton.setTooltip('Expand');
            //     } else {
            //         oToggleButton.setTooltip('Collapse');
            //     }
            // }
        });
    });
