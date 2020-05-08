Vue.component("choice-baselines", {
    template: '#choiceBaselines',
    props: {},
    data: function () {
        return {
            dialogVisible: false,
            currentPageListData: [],
            datalist: [],
            selectedBaselines: {},
            UUID: '',
            FDIp: '',
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            keyword: '',
            emptyText: '',
            searchType: 'BaselineName',
            searchTypes: [],
            sortParam: {
                order: 'asc',
                prop: 'BaselineName'
            },
            jumperPage: "1"

        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.searchTypes = [{
            id: 'BaselineName',
            label: this.i18ns.upgradePlan.upgradePlan_baselineName
        }]
    },
    watch: {
        UUID: function (val) {
            var obj = _.find(this.datalist, function (x) {
                return x.UUID == val;
            })
            if (obj) {
                this.selectedBaselines = obj;
            } else {
                this.selectedBaselines = {};
            }
            console.log(this.selectedBaselines, 'this.selectedBaselines');
        }
    },
    methods: {
        openDialog: function (ip, selectedBaselines) {
            this.FDIp = ip;
            this.selectedBaselines = selectedBaselines;
            this.UUID = selectedBaselines.UUID;
            this.dialogVisible = true;
            this.keyword = '';
            this.searchType = 'BaselineName';
            this.sortParam.order = 'asc';
            this.sortParam.prop = 'BaselineName';
        },
        handleDialogOpen: function () {
            this.getDataList();
        },
        /**
         * 搜索列表
         */
        searchDevices: function () {
            this.getDataList();
        },
        refresh: function () {
            this.keyword = '';
            this.searchType = 'BaselineName';
            this.getDataList();
        },
        /**
         * 获取列表
         */
        getDataList: function () {
            this.datalist = [];
            this.currentPageListData = [];
            var orderBy = this.sortParam.prop + ' ' + this.sortParam.order
            var queryParam = {
                ip: this.FDIp,
                orderby: orderBy
            }
            if (this.keyword) {
                queryParam.filter = this.searchType + " has " + "'" + this.keyword + "'"
            }
            this.emptyText = this.i18ns.common.loading;
            var that = this;
            upgradePackageManage.getAllBaselineList(queryParam, function (res) {
                if (res.code == 0) {
                    if (res.data[0].data.Members) {
                        that.datalist = res.data[0].data.Members;
                        if (!that.UUID) {
                            that.UUID = res.data[0].data.Members[0].UUID;
                        } else {
                            var obj = _.find(that.datalist, function (x) {
                                return x.UUID == that.UUID;
                            })
                            if (obj) {
                                that.selectedBaselines = obj;
                            } else {
                                that.selectedBaselines = {};
                            }
                        }
                    }
                    that.total = res.data[0].data['Members@odata.count'];
                    that.currentPage = 1;
                    that.jumperPage = '1';
                    that.pageSize = 10;
                    that.getCurrentPageListData();
                } else {
                    var msg = getErrorMsg(res);
                    alertMsg(msg);
                }

            });
        },
        getCurrentPageListData: function () {
            this.currentPageListData = _.slice(this.datalist, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
        },

        handleSizeChange: function (val) {
            this.currentPage = 1;
            this.pageSize = val;
            this.getCurrentPageListData();
        },
        handleCurrentChange: function (val) {
            this.currentPage = val;
            this.getCurrentPageListData();
        },
        submit: function () {
            this.$emit('choice-baselines', this.selectedBaselines);
            this.datalist = [];
            this.selectedBaselines = {};
            this.currentPageListData = [];
            this.UUID = '';
            this.dialogVisible = false;

        },
        handleDialogClose: function () {
            this.UUID = '';
            this.datalist = [];
            this.currentPageListData = [];
            this.selectedBaselines = {};
        },
        sortChange: function (data) {
            console.log(data, 'data');
            this.sortParam.prop = 'BaselineName';
            this.sortParam.order = data.order == 'descending' ? 'desc' : 'asc'
            this.getDataList();
        },
        getTypeTxt: function (data) {
            switch (data) {
                case "Huawei":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_huaweiBaseline;
                case "Custom":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_customBaseline;
                case "Bundle_Firmware":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_bundleFirmware;
                case "Bundle_Driver":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_bundleDirve;
                case "Bundle_Software":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_bundleSoftware;
                case "Package_Driver":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_packageDirve;
                case "Package_Firmware":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_packageFirmware;
                case "Board_Firmware":
                    return this.i18ns.upgradePackageWarehouse.versionWarehouse_boardPackage;
                default:
                    return '--';
            }
        },
        unitFun: function (Size) {
            return unitFun(Size)
        },
        jumper: function () {
            if (this.jumperPage && /^[0-9]*$/.test(this.jumperPage)) {
                var jump = parseInt(this.jumperPage);
                var totalPage = (this.total + this.pageSize) / this.pageSize;
                jump = jump >= totalPage ? totalPage : jump;
                if (jump > 0) {
                    this.currentPage = parseInt(this.jumperPage);
                    this.handleCurrentChange(this.currentPage)
                }
            } else {
                var that = this;
                setTimeout(function () {
                    that.jumperPage = "";
                }, 0);
            }
        }

    }
});