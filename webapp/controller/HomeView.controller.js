sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    'sap/viz/ui5/format/ChartFormatter',
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox, ChartFormatter, formatter) {
        "use strict";
        //Hello
        return Controller.extend("resq.controller.HomeView", {
            f: formatter,
            onInit: function () {

                var b = [];
                var c = {};
                //Fiori Theme font family and URI
                var t = {
                    fontFamily: "SAP-icons-TNT",
                    fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")
                };
                //Registering to the icon pool
                sap.ui.core.IconPool.registerFont(t);
                b.push(sap.ui.core.IconPool.fontLoaded("SAP-icons-TNT"));
                c["SAP-icons-TNT"] = t;

                this.editsystem = false;
                var AppConfig = {
                    "EDMXTableVisibility": false,
                    "EYAPIServAdaptMessage": "Objects generated successfully"
                    //"EYAPIServAdaptMessage": "&lt;ul&gt; &lt;li&gt; Below Objects got generated successfully &lt;/li&gt;&lt;li&gt; Class Name: ZPROXY_SALES_API_CRUDQ &lt;/li&gt;&lt;li&gt; Class Name: ZPROXY_SALES_API_CRUDQ &lt;/li&gt;&lt;ul&gt;"
                }
                var oModel = new JSONModel(AppConfig);
                this.getView().setModel(oModel, "AppConfig");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "SelectedRow");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "SelectedFMRow");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "selectedClassRow");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "SelectedProgramRow");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "ServiceDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/CASModel.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "CASModel");

                var sPath = jQuery.sap.getModulePath("resq", "/model/LCNCModel.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "LCNCModel");

                var sPath = jQuery.sap.getModulePath("resq", "/model/LCNCAPIModel.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "LCNCAPIModel");

                var sPath = jQuery.sap.getModulePath("resq", "/model/navigations.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "NavigationModel");

                var sPath = jQuery.sap.getModulePath("resq", "/model/CloudReadinessData.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "CloudReadinessData");

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

                var sPath = jQuery.sap.getModulePath("resq", "/model/Classes.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "Classes");

                var sPath = jQuery.sap.getModulePath("resq", "/model/ClassDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "ClassDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/FMs.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "FMs");

                var sPath = jQuery.sap.getModulePath("resq", "/model/FMsDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "FMDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/ProgramDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "ProgramDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/EnhancementRowDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "EnhancementRowDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/CloudCompCheck.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "CloudCompCheck");

                var sPath = jQuery.sap.getModulePath("resq", "/model/UploadEDMXData.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "UploadedEDMX");

                var sPath = jQuery.sap.getModulePath("resq", "/model/DBTables.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "DBTables");

                var sPath = jQuery.sap.getModulePath("resq", "/model/FMNames.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "FMNames");

                var sPath = jQuery.sap.getModulePath("resq", "/model/Transactions.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "Transactions");

                var sPath = jQuery.sap.getModulePath("resq", "/model/Includes.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "Includes");

                var sPath = jQuery.sap.getModulePath("resq", "/model/EnhancementDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "EnhancementDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/InAppDataModel.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "InAppDataModel");

                var sPath = jQuery.sap.getModulePath("resq", "/model/BTPCompatibleData.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "BTPCompatibleData");

                var sPath = jQuery.sap.getModulePath("resq", "/model/GFAPISalesDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "GFAPISalesDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/GFAPIFinanceDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "GFAPIFinanceDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/GFAPIPLCDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "GFAPIPLCDetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/GFAPIProcureDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "GFAPIProcureDetails");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "GFFieldDetails");

                var oModel = new JSONModel();
                this.getView().setModel(oModel, "UploadEDMXJsonData");

                var sPath = jQuery.sap.getModulePath("resq", "/model/GFFieldsSODetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "GFFieldsSODetails");

                var sPath = jQuery.sap.getModulePath("resq", "/model/GFFieldsSOItemDetails.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel, "GFFieldsSOItemDetails");

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
                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false);
                this.getOwnerComponent().getModel("AppConfig").refresh();
            },

            onClassSelected: function () {
                this.getView().byId("ClassesWizard").nextStep();
            },
            setIntervalFunction(j, sIdChart, sIdNextChart, sIdVBText, that) {

                var a = function () {
                    //that.getView().byId(sIdChart).setPercentage(j);
                    //that.getView().byId(sIdChart).rerender();
                    j++;
                    if (j == 101) {
                        clearInterval(that.MyInterval);

                        if (sIdNextChart.length > 1) {
                            that.getView().byId(sIdNextChart[sIdNextChart.length - 1]).setBusy(false);
                            that.getView().byId(sIdVBText[sIdVBText.length - 1]).setVisible(true);
                            sIdNextChart.pop();
                            sIdVBText.pop();
                            that.setIntervalFunction(1, sIdNextChart[sIdNextChart.length - 1], sIdNextChart, sIdVBText, that);
                        }
                        else {
                            that.getView().byId(sIdNextChart[0]).setBusy(false);
                            that.getView().byId(sIdVBText[0]).setVisible(true);
                            that.getView().getModel("SelectedProgramRow").setProperty("/Status", "C");
                            that.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", true);
                            // that.getView().byId("CreateProductWizard").nextStep();
                            /* 
                                data-sap-ui-theme="EY_Horizon_dark"
                                data-sap-ui-versionedLibCss="true"
                                data-sap-ui-theme-roots='{"EY_Horizon_dark" : "/comsapuitheming.runtime/themeroot/v1/~v=Base:11.1.41,*.*.EY_Horizon_dark(sap_horizon_dark):20221018T091949Z/UI5"}'
                                
                                https://api.cf.us10-001.hana.ondemand.com
                                
                                data-sap-ui-theme="sap_horizon"
                            */
                        }
                    }
                };
                this.MyInterval = setInterval(a, 30);
            },
            MigrateToCreateWrapAPI: function () {
                this.getView().byId("CreateProductWizard").nextStep();
            },

            OnBuildToCloudPress: function () {
                this.byId("pageContainer").to(this.getView().createId("TransToCloudBTP"));
                //this.getView().byId("CreateProductWizard").nextStep();
            },
            onFilterSelect: function () {
                if (this.getView().byId("idIconTabBar").getSelectedKey() === "Programs") {
                    this.getView().byId("CreateProductWizard").nextStep();
                }
                else if (this.getView().byId("idIconTabBar").getSelectedKey() === "Classes") {
                    this.getView().byId("ClassesWizard").nextStep();
                }
                else if (this.getView().byId("idIconTabBar").getSelectedKey() === "FMs") {
                    this.getView().byId("FMsWizard").nextStep();
                }
                else {
                    this.getView().byId("EnhancementWizard").nextStep();
                }
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
            /****************************** GF in Build Tab ******************/
            onGFWhiteListAPIDetails: function(){
                if (!this.GFWhiteListAPIDetailsFrag) {
                    this.GFWhiteListAPIDetailsFrag = sap.ui.xmlfragment("myfrag", "resq.view.GFWhiltelistAPIDetailsPopup", this);
                    this.getView().addDependent(this.GFWhiteListAPIDetailsFrag);
                }
                this.getView().setBusy(true);
                this.GFWhiteListAPIDetailsFrag.open();
            },
            OnGFWhitelistDetailPopupClose:function(){
                this.getView().setBusy(false);
                this.GFWhiteListAPIDetailsFrag.close();
                this.GFWhiteListAPIDetailsFrag.destroy();
                this.GFWhiteListAPIDetailsFrag = undefined;
            },
            onGFWhitelistDetailProcess:function(){
                var that = this;
                var msg = "Selected File Downloaded Succesfully";
                MessageBox.success(msg, {
                    actions: [MessageBox.Action.OK],
                    emphasizedAction: MessageBox.Action.OK,
                    onClose: function (sAction) {                        
                        that.getView().setBusy(false);
                        that.GFWhiteListAPIDetailsFrag.close();
                        that.GFWhiteListAPIDetailsFrag.destroy();
                        that.GFWhiteListAPIDetailsFrag = undefined;
                    }
                });
            },
            handleUploadPress: function () {
                var AppConfig = this.getView().getModel("AppConfig").getData();
                AppConfig.EDMXTableVisibility = !AppConfig.EDMXTableVisibility
                this.getView().getModel("AppConfig").setData(AppConfig);
            },
            onGFAutomateIconProcess:function(oEvent){
                var contextPath = oEvent.getSource().getParent().getBindingContextPath();
                //this.getView().getModel("AppConfig").setProperty("/edmxContextPath", contextPath);
                var entitySelected = oEvent.getSource().getModel("UploadedEDMX").getProperty("Entity");
                if(entitySelected === "A_SalesOrder")
                {
                    this.getView().getModel("GFFieldDetails").setData(this.getView().getModel("GFFieldsSODetails").getData());
                }
                else{
                    this.getView().getModel("GFFieldDetails").setData(this.getView().getModel("GFFieldsSOItemDetails").getData());
                }
                oEvent.getSource().getModel("UploadedEDMX").setProperty(contextPath + "/Status", "Completed");
                oEvent.getSource().getParent().getCells()[1].setColor("#256f3a");
                //var selectedFieldRow = oEvent.getSource().getBindingContext("UploadedEDMX").getObject();
                //this.getView().getModel("UploadEDMXJsonData").setData(selectedFieldRow);
                if (!this.GFFieldDetailsFrag) {
                    this.GFFieldDetailsFrag = sap.ui.xmlfragment("myfrag", "resq.view.GFFieldDetails", this);
                    this.getView().addDependent(this.GFFieldDetailsFrag);
                }
                this.getView().setBusy(true);
                this.GFFieldDetailsFrag.open();
            },
            onGFFieldDetailsPopupClose:function(){
                this.getView().setBusy(false);
                this.GFFieldDetailsFrag.close();
                this.GFFieldDetailsFrag.destroy();
                this.GFFieldDetailsFrag = undefined;
            },
            onGFFieldDetailsProcess:function(){
                //that.getView().getModel("UploadEDMXJsonData").setData(ovalue);
                /*var selectedEntity = this.getView().getModel("UploadEDMXJsonData").getData().Entity;
                var tabData = this.getView().getModel("UploadedEDMX").getData();
                var contextPath = this.getView().getModel("AppConfig").getProperty("edmxContextPath");
                
                tabData.forEach((ovalue, index) => {
                    if (ovalue.Entity === selectedEntity) {
                        ovalue.Status = "Completed";
                        i = index;
                        that.getView().getModel("tabData").setData(ovalue);
                    }
                }, this);*/

                this.getView().setBusy(false);
                this.GFFieldDetailsFrag.close();
                this.GFFieldDetailsFrag.destroy();
                this.GFFieldDetailsFrag = undefined;
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
            openDBTableDetails: function () {
                if (!this.DBTableDetailsDialog) {
                    this.DBTableDetailsDialog = sap.ui.xmlfragment("myfrag", "resq.view.TableDetails", this);
                    this.getView().addDependent(this.DBTableDetailsDialog);
                }
                this.getView().setBusy(true);
                this.DBTableDetailsDialog.open();
            },
            OnDBTablePopupClose: function () {
                this.getView().setBusy(false);
                this.DBTableDetailsDialog.close();
                this.DBTableDetailsDialog.destroy();
                this.DBTableDetailsDialog = undefined;
            },
            onPressDisplayBTPCompDetails: function () {
                if (!this.DispBTPCompDetailsDialog) {
                    this.DispBTPCompDetailsDialog = sap.ui.xmlfragment("myfrag", "resq.view.BTPCompatibleDetails", this);
                    this.getView().addDependent(this.DispBTPCompDetailsDialog);
                }
                this.getView().setBusy(true);
                this.DispBTPCompDetailsDialog.open();
            },
            OnBTPCompPopupClose: function () {
                this.getView().setBusy(false);
                this.DispBTPCompDetailsDialog.close();
                this.DispBTPCompDetailsDialog.destroy();
                this.DispBTPCompDetailsDialog = undefined;
            },
            openFMNamesDetails: function () {
                if (!this.FMNamesDetailsDialog) {
                    this.FMNamesDetailsDialog = sap.ui.xmlfragment("myfrag", "resq.view.FMNames", this);
                    this.getView().addDependent(this.FMNamesDetailsDialog);
                }
                this.getView().setBusy(true);
                this.FMNamesDetailsDialog.open();
            },
            OnFMNamesPopupClose: function () {
                this.getView().setBusy(false);
                this.FMNamesDetailsDialog.close();
                this.FMNamesDetailsDialog.destroy();
                this.FMNamesDetailsDialog = undefined;
            },
            openIncludesDetails: function () {
                if (!this.IncludesDetailsDialog) {
                    this.IncludesDetailsDialog = sap.ui.xmlfragment("myfrag", "resq.view.Includes", this);
                    this.getView().addDependent(this.IncludesDetailsDialog);
                }
                this.getView().setBusy(true);
                this.IncludesDetailsDialog.open();
            },
            OnIncludesPopupClose: function () {
                this.getView().setBusy(false);
                this.IncludesDetailsDialog.close();
                this.IncludesDetailsDialog.destroy();
                this.IncludesDetailsDialog = undefined;
            },
            /*********************************************** Program Section ***********************************/
            onProgramRemediatePress: function () {
                var that = this;
                var aFMsRows = this.getView().byId("idRemediateProgramsMigrat").getItems();
                var selectedRow = this.getView().byId("idRemediateProgramsMigrat").getSelectedItems();
                if (selectedRow.length === 0) {
                    MessageBox.error("Please select a record to Remediate");
                }
                else {
                    if (selectedRow[0].getCells()[7].getSelected()) {
                        MessageBox.error("Cannot Perform Remediate for this record as it is retired");
                    }
                    else {
                        if (!this.ProgramDetailsFrag) {
                            this.ProgramDetailsFrag = sap.ui.xmlfragment("myfrag", "resq.view.ProgramDetailsPopup", this);
                            this.getView().addDependent(this.ProgramDetailsFrag);
                        }
                        this.getView().setBusy(true);
                        this.ProgramDetailsFrag.open();
                    }
                }
            },
            OnProgramDetailPopupClose: function (oEvent) {
                var aFMsRows = this.getView().byId("idRemediateProgramsMigrat").getItems();
                var selectedRow = this.getView().byId("idRemediateProgramsMigrat").getSelectedItems();
                selectedRow[0].getCells()[6].setText("In Progress");
                selectedRow[0].getCells()[6].setState("Warning");
                this.getView().setBusy(false);
                this.ProgramDetailsFrag.close();
                this.ProgramDetailsFrag.destroy();
                this.ProgramDetailsFrag = undefined;
            },
            onProgramDetailsProcess: function (oEvent) {
                if (oEvent.getSource().getParent().getCells()[4].getText() === "Automatic") {
                    oEvent.getSource().getParent().getCells()[4].setText("Completed");
                    oEvent.getSource().getParent().getCells()[4].setState("Success");
                    oEvent.getSource().getParent().getCells()[5].setColor("#256f3a");
                }
            },
            onProgramRemediationComplete: function (oEvent) {
                var aFMsRows = this.getView().byId("idRemediateProgramsMigrat").getItems();
                var selectedRow = this.getView().byId("idRemediateProgramsMigrat").getSelectedItems();
                selectedRow[0].getCells()[6].setText("Cloud Ready");
                selectedRow[0].getCells()[6].setState("Success");
                this.getView().setBusy(false);
                this.ProgramDetailsFrag.close();
                this.ProgramDetailsFrag.destroy();
                this.ProgramDetailsFrag = undefined;
            },
            onProgramLiftAndShiftPress: function () {
                var aFMsRows = this.getView().byId("idRemediateProgramsMigrat").getItems();
                var selectedRow = this.getView().byId("idRemediateProgramsMigrat").getSelectedItems();

                if (selectedRow.length === 0) {
                    MessageBox.error("Please select a record to Lift and Shift");
                }
                else {
                    if (selectedRow[0].getCells()[7].getSelected()) {
                        MessageBox.error("Cannot Perform Lift and Shift for this record as it is retired");
                    }
                    else if (selectedRow[0].getCells()[6].getText() !== "Cloud Ready") {
                        MessageBox.warning("Cannot Perform Lift and Shift for this record as it is not Cloud Ready. Please remediate the record.");
                    }
                    else {
                        //var oSelectedItem = this.getView().byId("idFMsMigrat").getSelectedItem();
                        var programName = selectedRow[0].getCells()[0].getText();
                        var Programs = this.getView().getModel("Programs").getData();
                        //var i;
                        var that = this;

                        Programs.forEach((ovalue, index) => {
                            if (ovalue.Program === programName) {
                                ovalue.Status = "In Progress";
                                that.getView().getModel("SelectedProgramRow").setData(ovalue);
                            }
                        }, this);
                        //that.getView().getModel("FMs").setData(fMs);
                        this.getView().byId("CreateProductWizard").nextStep();
                        this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false)
                        //this.getOwnerComponent().getModel("AppConfig").refresh();
                        this.setIntervalFunction(1, "DynamicArtifact", ["DynamicArtifact"], ["vbDynamicArtifact"], this);
                    }
                }
            },
            MigrateToBTPPress: function () {
                var programName = this.getView().getModel("SelectedProgramRow").getData().Program;
                var Programs = this.getView().getModel("Programs").getData();
                var i;
                var that = this;

                Programs.forEach((ovalue, index) => {
                    if (ovalue.Program === programName) {
                        ovalue.Status = "IP";
                        i = index;
                        that.getView().getModel("SelectedProgramRow").setData(ovalue);
                    }
                }, this);

                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false);
                this.getView().byId("CreateProductWizard").nextStep();
                this.setIntervalFunction(1, "CustomEntityChart", ["CustomQueryChart", "ServiceDefinitionChart", "ServiceBindingChart", "CustomEntityChart"], ["vbCustomQueryChart", "vbServiceDefinitionChart", "vbServiceBindingChart", "vbCustomEntityChart"], this);
            },
            OnNextStepForFioriBuild: function () {
                this.getView().getModel("SelectedProgramRow").setProperty("/Status", "IP");
                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false);
                this.getView().byId("CreateProductWizard").nextStep();
                this.setIntervalFunction(1, "idFioriListReportCreationChart", ["idFioriLaunchpadConfiguration", "idFioriTileConfigurationChart", "idFioriListReportCreationChart"], ["idVBFioriLaunchpadConfiguration", "idVBFioriTileConfigurationChart", "idVBFioriListReportCreationChart"], this);
            },
            /*********************************************** Class Section ****************************************/
            onClassRemediatePress: function () {
                var that = this;
                var aFMsRows = this.getView().byId("idClassMigrat").getItems();
                var selectedClassRow = this.getView().byId("idClassMigrat").getSelectedItems();
                if (selectedClassRow.length === 0) {
                    MessageBox.error("Please select a record to Remediate");
                }
                else {
                    if (selectedClassRow[0].getCells()[4].getSelected()) {
                        MessageBox.error("Cannot Perform Remediate for this record as it is retired");
                    }
                    else {
                        if (!this.ClassDetailsFrag) {
                            this.ClassDetailsFrag = sap.ui.xmlfragment("myfrag", "resq.view.ClassDetailsPopup", this);
                            this.getView().addDependent(this.ClassDetailsFrag);
                        }
                        this.getView().setBusy(true);
                        this.ClassDetailsFrag.open();
                    }
                }
            },
            OnClassDetailPopupClose: function (oEvent) {
                var aFMsRows = this.getView().byId("idClassMigrat").getItems();
                var selectedClassRow = this.getView().byId("idClassMigrat").getSelectedItems();
                selectedClassRow[0].getCells()[2].setText("In Progress");
                selectedClassRow[0].getCells()[2].setState("Warning");
                this.getView().setBusy(false);
                this.ClassDetailsFrag.close();
                this.ClassDetailsFrag.destroy();
                this.ClassDetailsFrag = undefined;
            },
            onClassDetailsProcess: function (oEvent) {
                if (oEvent.getSource().getParent().getCells()[4].getText() === "Automatic") {
                    oEvent.getSource().getParent().getCells()[4].setText("Completed");
                    oEvent.getSource().getParent().getCells()[4].setState("Success");
                    oEvent.getSource().getParent().getCells()[5].setColor("#256f3a");
                }
            },
            onClassRemediationComplete: function (oEvent) {
                //var aFMsRows = this.getView().byId("idClassMigrat").getItems();
                var selectedClassRow = this.getView().byId("idClassMigrat").getSelectedItems();
                selectedClassRow[0].getCells()[2].setText("Cloud Ready");
                selectedClassRow[0].getCells()[2].setState("Success");
                this.getView().setBusy(false);
                this.ClassDetailsFrag.close();
                this.ClassDetailsFrag.destroy();
                this.ClassDetailsFrag = undefined;
            },
            onClassLiftAndShiftPress: function () {
                //var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedClassRow = this.getView().byId("idClassMigrat").getSelectedItems();

                if (selectedClassRow.length === 0) {
                    MessageBox.error("Please select a record to Lift and Shift");
                }
                else {
                    if (selectedClassRow[0].getCells()[4].getSelected()) {
                        MessageBox.error("Cannot Perform Lift and Shift for this record as it is retired");
                    }
                    else if (selectedClassRow[0].getCells()[2].getText() !== "Cloud Ready") {
                        MessageBox.warning("Cannot Perform Lift and Shift for this record as it is not Cloud Ready. Please remediate the record.");
                    }
                    else {
                        //var oSelectedItem = this.getView().byId("idFMsMigrat").getSelectedItem();
                        var className = selectedClassRow[0].getCells()[0].getText();
                        var Classes = this.getView().getModel("Classes").getData();
                        //var i;
                        var that = this;

                        Classes.forEach((ovalue, index) => {
                            if (ovalue.ClassName === className) {
                                ovalue.Status = "Cloud Ready";
                                that.getView().getModel("selectedClassRow").setData(ovalue);
                            }
                        }, this);
                        //that.getView().getModel("FMs").setData(fMs);
                        this.getView().byId("ClassesWizard").nextStep();
                        this.getView().getModel("AppConfig").setProperty("/ClassImportToBTP", false)
                        this.getOwnerComponent().getModel("AppConfig").refresh();
                        //this.setIntervalFunction(1, "CustomEntityChart", ["ServiceBindingChart", "ServiceDefinitionChart", "CustomQueryChart", "CustomEntityChart"], this);
                    }
                }
            },
            handleClassUpload: function () {
                this.getView().getModel("AppConfig").setProperty("/From", "Class");
                if (!this.GitAuthFrag) {
                    this.GitAuthFrag = sap.ui.xmlfragment("myfrag", "resq.view.GitAuthenticationPopup", this);
                    this.getView().addDependent(this.GitAuthFrag);
                }
                this.getView().setBusy(true);
                this.GitAuthFrag.open();
            },
            OnNextStepForClassFioriBuild: function () {
                this.getView().getModel("AppConfig").setProperty("/From", "Class");
                if (!this.BranchSelFrag) {
                    this.BranchSelFrag = sap.ui.xmlfragment("myfrag", "resq.view.BranchAndPkgSelectionPopup", this);
                    this.getView().addDependent(this.BranchSelFrag);
                }
                this.getView().setBusy(true);
                this.BranchSelFrag.open();
                //this.getView().byId("FMsWizard").nextStep();
            },
            /*********************************************** FM Section ****************************************/
            onFMRemediatePress: function () {
                var that = this;
                var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idFMsMigrat").getSelectedItems();
                if (selectedRow.length === 0) {
                    MessageBox.error("Please select a record to Remediate");
                }
                else {
                    if (selectedRow[0].getCells()[5].getSelected()) {
                        MessageBox.error("Cannot Perform Remediate for this record as it is retired");
                    }
                    else {
                        if (!this.FMDetailsFrag) {
                            this.FMDetailsFrag = sap.ui.xmlfragment("myfrag", "resq.view.FMDetailsPopup", this);
                            this.getView().addDependent(this.FMDetailsFrag);
                        }
                        this.getView().setBusy(true);
                        this.FMDetailsFrag.open();
                    }
                }
            },
            OnFMsDetailPopupClose: function (oEvent) {
                var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idFMsMigrat").getSelectedItems();
                selectedRow[0].getCells()[3].setText("In Progress");
                selectedRow[0].getCells()[3].setState("Warning");
                this.getView().setBusy(false);
                this.FMDetailsFrag.close();
                this.FMDetailsFrag.destroy();
                this.FMDetailsFrag = undefined;
            },
            onFMDetailsProcess: function (oEvent) {
                if (oEvent.getSource().getParent().getCells()[4].getText() === "Automatic") {
                    oEvent.getSource().getParent().getCells()[4].setText("Completed");
                    oEvent.getSource().getParent().getCells()[4].setState("Success");
                    oEvent.getSource().getParent().getCells()[5].setColor("#256f3a");
                }
            },
            onFMRemediationComplete: function (oEvent) {
                var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idFMsMigrat").getSelectedItems();
                selectedRow[0].getCells()[3].setText("Cloud Ready");
                selectedRow[0].getCells()[3].setState("Success");
                this.getView().setBusy(false);
                this.FMDetailsFrag.close();
                this.FMDetailsFrag.destroy();
                this.FMDetailsFrag = undefined;
            },
            onFMsLiftAndShiftPress: function () {
                var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idFMsMigrat").getSelectedItems();

                if (selectedRow.length === 0) {
                    MessageBox.error("Please select a record to Lift and Shift");
                }
                else {
                    if (selectedRow[0].getCells()[5].getSelected()) {
                        MessageBox.error("Cannot Perform Lift and Shift for this record as it is retired");
                    }
                    else if (selectedRow[0].getCells()[3].getText() !== "Cloud Ready") {
                        MessageBox.warning("Cannot Perform Lift and Shift for this record as it is not Cloud Ready. Please remediate the record.");
                    }
                    else {
                        //var oSelectedItem = this.getView().byId("idFMsMigrat").getSelectedItem();
                        var programName = selectedRow[0].getCells()[0].getText();
                        var FMs = this.getView().getModel("FMs").getData();
                        //var i;
                        var that = this;

                        FMs.forEach((ovalue, index) => {
                            if (ovalue.Program === programName) {
                                ovalue.Status = "Cloud Ready";
                                that.getView().getModel("SelectedFMRow").setData(ovalue);
                            }
                        }, this);
                        //that.getView().getModel("FMs").setData(fMs);
                        this.getView().byId("FMsWizard").nextStep();
                        this.getView().getModel("AppConfig").setProperty("/FMImportToBTP", false)
                        this.getOwnerComponent().getModel("AppConfig").refresh();
                        //this.setIntervalFunction(1, "CustomEntityChart", ["ServiceBindingChart", "ServiceDefinitionChart", "CustomQueryChart", "CustomEntityChart"], this);
                    }
                }
            },
            handleFMUpload: function () {
                this.getView().getModel("AppConfig").setProperty("/From", "FM");
                if (!this.GitAuthFrag) {
                    this.GitAuthFrag = sap.ui.xmlfragment("myfrag", "resq.view.GitAuthenticationPopup", this);
                    this.getView().addDependent(this.GitAuthFrag);
                }
                this.getView().setBusy(true);
                this.GitAuthFrag.open();
            },
            onSaveGitAuthentication: function () {
                this.GitAuthFrag.close();
                this.GitAuthFrag.destroy();
                this.GitAuthFrag = undefined;
                this.getView().setBusy(false);
                //selectedClassRow
                var appConfigData = this.getView().getModel("AppConfig").getData();
                if (appConfigData.From === "Class") {
                    var classSelectedRow = this.getView().getModel("selectedClassRow").getData();
                    classSelectedRow.Status = "Exported to GitHub";
                    this.getView().getModel("selectedClassRow").setData(classSelectedRow);
                    this.getView().getModel("AppConfig").setProperty("/ClassImportToBTP", true)
                    this.getView().getModel("selectedClassRow").refresh();
                }
                else {
                    var fmSelectedRow = this.getView().getModel("SelectedFMRow").getData();
                    fmSelectedRow.Status = "Exported to GitHub";
                    this.getView().getModel("SelectedFMRow").setData(fmSelectedRow);
                    this.getView().getModel("AppConfig").setProperty("/FMImportToBTP", true)
                    this.getView().getModel("SelectedFMRow").refresh();
                }
                this.getOwnerComponent().getModel("AppConfig").refresh();
            },
            onCancelGitAuthentication: function () {
                this.GitAuthFrag.close();
                this.GitAuthFrag.destroy();
                this.GitAuthFrag = undefined;
                this.getView().setBusy(false);
            },
            OnNextStepForFMFioriBuild: function () {
                this.getView().getModel("AppConfig").setProperty("/From", "FM");
                if (!this.BranchSelFrag) {
                    this.BranchSelFrag = sap.ui.xmlfragment("myfrag", "resq.view.BranchAndPkgSelectionPopup", this);
                    this.getView().addDependent(this.BranchSelFrag);
                }
                this.getView().setBusy(true);
                this.BranchSelFrag.open();
                //this.getView().byId("FMsWizard").nextStep();
            },
            onSaveBranchSelection: function () {
                this.BranchSelFrag.close();
                this.BranchSelFrag.destroy();
                this.BranchSelFrag = undefined;
                this.getView().setBusy(false);
                var appConfigData = this.getView().getModel("AppConfig").getData();
                if (appConfigData.From === "Class") {
                    this.getView().byId("ClassesWizard").nextStep();
                }
                else {
                    this.getView().byId("FMsWizard").nextStep();
                }
            },
            onCancelBranchSelection: function () {
                this.BranchSelFrag.close();
                this.BranchSelFrag.destroy();
                this.BranchSelFrag = undefined;
                this.getView().setBusy(false);
            },
            onFMsWrapPress: function () {
                var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idFMsMigrat").getSelectedItems();
                if (selectedRow.length === 0) {
                    MessageBox.error("Please select a record to Wrap");
                }
                else {
                    if (selectedRow[0].getCells()[5].getSelected()) {
                        MessageBox.error("Cannot Perform Wrap for this record as it is retired");
                    }
                    else { }
                }
            },
            onEnhancementRemediatePress: function () {
                var that = this;
                //var aFMsRows = this.getView().byId("idEnhanceMigrate").getItems();
                var selectedRow = this.getView().byId("idEnhanceMigrate").getSelectedItems();
                if (selectedRow.length === 0) {
                    MessageBox.error("Please select a record to Remediate");
                }
                else {
                    if (selectedRow[0].getCells()[6].getSelected()) {
                        MessageBox.error("Cannot Perform Remediate for this record as it is retired");
                    }
                    else {
                        if (!this.EnhancementDetailsFrag) {
                            this.EnhancementDetailsFrag = sap.ui.xmlfragment("myfrag", "resq.view.EnhancementDetailsPopup", this);
                            this.getView().addDependent(this.EnhancementDetailsFrag);
                        }
                        this.getView().setBusy(true);
                        this.EnhancementDetailsFrag.open();
                    }
                }
            },
            OnEnhancementDetailPopupClose: function (oEvent) {
                //var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idEnhanceMigrate").getSelectedItems();
                selectedRow[0].getCells()[4].setText("In Progress");
                selectedRow[0].getCells()[4].setState("Warning");
                this.getView().setBusy(false);
                this.EnhancementDetailsFrag.close();
                this.EnhancementDetailsFrag.destroy();
                this.EnhancementDetailsFrag = undefined;
            },
            onEnhancementDetailsProcess: function (oEvent) {
                if (oEvent.getSource().getParent().getCells()[4].getText() === "Automatic") {
                    oEvent.getSource().getParent().getCells()[4].setText("Completed");
                    oEvent.getSource().getParent().getCells()[4].setState("Success");
                    oEvent.getSource().getParent().getCells()[5].setColor("#256f3a");
                }
            },
            onEnhancementRemediationComplete: function (oEvent) {
                //var aFMsRows = this.getView().byId("idFMsMigrat").getItems();
                var selectedRow = this.getView().byId("idEnhanceMigrate").getSelectedItems();
                selectedRow[0].getCells()[4].setText("Cloud Ready");
                selectedRow[0].getCells()[4].setState("Success");
                this.getView().setBusy(false);
                this.EnhancementDetailsFrag.close();
                this.EnhancementDetailsFrag.destroy();
                this.EnhancementDetailsFrag = undefined;
            },
            onEnhancementInApp: function () {
                var selectedRow = this.getView().byId("idEnhanceMigrate").getSelectedItems();
                if (selectedRow) {
                    this.getView().byId("EnhancementWizard").nextStep();
                }
            },

            OnDetailPopupClose: function (oEvent) {
                this.getView().setBusy(false);
                oEvent.getSource().getParent().getParent().close();
            },
            OnSystemEdit: function (oEvent) {
                var that = this;

                this.systemschema.System = oEvent.getSource().getParent().getParent().getCells()[0].getProperty("text");
                this.systemschema.Version = oEvent.getSource().getParent().getParent().getCells()[1].getProperty("text");
                this.systemschema.ST = oEvent.getSource().getParent().getParent().getCells()[2].getProperty("text");
                this.systemschema.RFC = oEvent.getSource().getParent().getParent().getCells()[3].getProperty("text");
                this.systemschema.Status = oEvent.getSource().getParent().getParent().getCells()[4].getProperty("text");
                this.getView().getModel("SystemEdit").setData(this.systemschema);
                this.editsystem = true;

                if (!this.systemFrag) {
                    this.systemFrag = sap.ui.xmlfragment("myfrag", "resq.view.system", this);
                    this.getView().addDependent(this.systemFrag);
                }
                this.getView().setBusy(true);
                this.systemFrag.open();
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
                //oEvent.getSource().getParent().close();
                this.getView().setBusy(false);
                this.systemFrag.close();
                this.systemFrag.destroy();
                this.systemFrag = undefined;
            },
            OnAddSystem: function () {
                var that = this;
                if (!this.systemFrag) {
                    this.systemFrag = sap.ui.xmlfragment("myfrag", "resq.view.system", this);
                    this.getView().addDependent(this.systemFrag);
                }

                that.getView().setBusy(true);
                this.systemFrag.open();

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
            OnBookSlot: function (oEvent) {
                var that = this;
                var buttonId = oEvent.getSource().getId();
                if (buttonId === "container-resq---HomeView--CASBookSlot") {
                    that.getView().getModel("ServiceDetails").setData(that.getView().getModel("CASModel").getData());
                }
                else if (buttonId === "container-resq---HomeView--LCNCBookSlot") {
                    that.getView().getModel("ServiceDetails").setData(that.getView().getModel("LCNCModel").getData());
                }
                else {
                    that.getView().getModel("ServiceDetails").setData(that.getView().getModel("LCNCAPIModel").getData());
                }
                if (!that.ReSQPopUp) {
                    that.ReSQPopUp = sap.ui.xmlfragment("myfrag", "resq.view.ReSQPopUp", that);
                    that.getView().addDependent(that.ReSQPopUp);
                }

                that.getView().setBusy(true);
                that.ReSQPopUp.open();
            },

            OnRequestActivation: function (oEvent) {
                var that = this;
                var msg = "Pre-Requisites and requested service activated successfully";
                var serviceDetails = this.getView().getModel("ServiceDetails").getData();
                if (serviceDetails.Title === "LCNC Tool - RAP Builder") {
                    MessageBox.success(msg, {
                        actions: [MessageBox.Action.OK],
                        emphasizedAction: MessageBox.Action.OK,
                        onClose: function (sAction) {
                            that.getView().byId("LCNCBookSlot").setText("Active");
                            that.getView().byId("LCNCBookSlot").setType("Success");
                            that.getView().setBusy(false);
                            that.ReSQPopUp.close();
                            that.ReSQPopUp.destroy();
                            that.ReSQPopUp = undefined;
                            //oEvent.getSource().getParent().close();
                        }
                    });
                }
                else if (serviceDetails.Title === "Cloud Assessment Service (CAT)") {
                    this.getView().byId("CASBookSlot").setText("Active");
                    this.getView().byId("CASBookSlot").setType("Success");
                    this.getView().setBusy(false);
                    this.ReSQPopUp.close();
                    this.ReSQPopUp.destroy();
                    this.ReSQPopUp = undefined;
                }
                else {
                    MessageBox.success(msg, {
                        actions: [MessageBox.Action.OK],
                        emphasizedAction: MessageBox.Action.OK,
                        onClose: function (sAction) {
                            that.getView().byId("LCNCFioriBookSlot").setText("Active");
                            that.getView().byId("LCNCFioriBookSlot").setType("Success");
                            that.getView().setBusy(false);
                            that.ReSQPopUp.close();
                            that.ReSQPopUp.destroy();
                            that.ReSQPopUp = undefined;
                            //oEvent.getSource().getParent().close();
                        }
                    });
                }
            },

            OnUserEdit: function (oEvent) {
                var that = this;

                this.userschema.ID = oEvent.getSource().getParent().getParent().getCells()[0].getProperty("text");
                this.userschema.Name = oEvent.getSource().getParent().getParent().getCells()[1].getProperty("text");
                this.userschema.Role = oEvent.getSource().getParent().getParent().getCells()[2].getProperty("text");
                this.userschema.Mail = oEvent.getSource().getParent().getParent().getCells()[3].getProperty("text");
                this.userschema.Company = oEvent.getSource().getParent().getParent().getCells()[4].getProperty("text");
                this.userschema.Status = oEvent.getSource().getParent().getParent().getCells()[5].getProperty("text");
                this.getView().getModel("UserEdit").setData(this.userschema);
                this.edituser = true;
                if (!this.UserFrag) {
                    this.UserFrag = sap.ui.xmlfragment("myfrag", "resq.view.user", this);
                    this.getView().addDependent(this.UserFrag);
                }
                this.getView().setBusy(true);
                this.UserFrag.open();
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
            OnBookSlotCancel: function (oEvent) {
                this.getView().setBusy(false);
                this.ReSQPopUp.close();
                this.ReSQPopUp.destroy();
                this.ReSQPopUp = undefined;
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
                //oEvent.getSource().getParent().close();
                this.UserFrag.close();
                this.UserFrag.destroy();
                this.UserFrag = undefined;
            },

            OnAddUser: function () {
                var that = this;
                if (!this.UserFrag) {

                    this.UserFrag = sap.ui.xmlfragment("myfrag", "resq.view.user", this);
                    this.getView().addDependent(this.UserFrag);
                }
                this.getView().setBusy(true);
                this.UserFrag.open();
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
            },

            OnRunAnalysis: function () {
                this.getView().byId("TitleCATSummary").setVisible(true);
                this.getView().byId("CATSummaryObjectDetails").setVisible(true);
                this.getView().byId("ButtonDetailView").setVisible(true);
            },

            OnShowAnalysis: function (oEvent) {
                this.getView().byId("idIconTabBar").setVisible(true);
                this.getView().byId("idIconTabBar").setBusy(true);
                //this.getView().byId("CreateProductWizard").setVisible(true);
                //var firstStep = this.getView().byId("CreateProductWizard").getSteps()[0];
                //var oCurrStep = this.getView().byId("AnalyseCATResult");
                //this.getView().byId("CreateProductWizard").setCurrentStep(firstStep);
                var that = this;
                setTimeout(() => {
                    that.getView().byId("idIconTabBar").setBusy(false);
                    that.getView().byId("CreateProductWizard").nextStep();
                }, 1000);

                //var programData = this.getView().getModel("Programs").getData();
                //this.getView().byId("CreateProductWizard").setCurrentStep(this.byId("idRemediate"));
                //this.getView().byId("CreateProductWizard").getSteps()[1];
            },

            /************************************* Green Field Approach ******************/
            OnUploadEDMXProceed: function () {
                var that = this;
                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false);
                this.getView().byId("NewBuildInCloud").nextStep();
                this.setIntervalFunction(1, "ProxyArtifactCreate", ["AuxillaryClassCreate", "ProxyArtifactCreate"], ["vbAuxillaryClassCreate", "vbProxyArtifactCreate"], this);
            },

            OnNextStepForNewRapBuild: function () {
                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false);
                this.getView().byId("NewBuildInCloud").nextStep();
                this.setIntervalFunction(1, "CustEntityCreate", ["ServiceBinding", "ServiceDefnCreate", "CustQueryClassCreate", "CustEntityCreate"], ["vbServiceBinding", "vbServiceDefnCreate", "vbCustQueryClassCreate", "vbCustEntityCreate"], this);
            },

            onProceedFioriBOT:function(){
                this.getView().getModel("AppConfig").setProperty("/MoveToFioriBOTBuilder", false);
                this.getView().byId("NewBuildInCloud").nextStep();
                this.getView().byId("NewBuildInCloud").nextStep();
                this.setIntervalFunction(1, "GFFioriAppGen", ["GFLPDConfiguration", "GFDepCLFoundry", "GFFioriAppGen"], ["vbGFLPDConfiguration", "vbGFDepCLFoundry", "vbGFFioriAppGen"], this);
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
