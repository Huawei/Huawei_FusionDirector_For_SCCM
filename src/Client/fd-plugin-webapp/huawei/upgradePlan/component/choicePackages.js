Vue.component("choice-packages", {
    template: '#choicePackages',
    props: {},
    data: function () {
        return {
            dialogVisible: false,
            datalist: [],
            selectedList: [],
            FDIp: '',
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            keyword: '',
            emptyText: '',
            searchType: 'PackageName',
            searchTypes: [],
            sortParam: {
                order: 'asc',
                prop: 'PackageName'
            },
            jumperPage: "1"
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.searchTypes = [{
                id: 'PackageName',
                label: this.i18ns.upgradePlan.upgradePlan_packageName
            },
            {
                id: 'Component',
                label: this.i18ns.upgradePlan.upgradePlan_component
            },
            {
                id: 'Version',
                label: this.i18ns.upgradePlan.upgradePlan_version
            },
            {
                id: 'Model',
                label: this.i18ns.upgradePlan.upgradePlan_model
            },
            {
                id: 'Manufacturer',
                label: this.i18ns.upgradePlan.upgradePlan_manufacturer
            }
        ]
    },
    methods: {
        openDialog: function (ip, list) {
            this.FDIp = ip;
            this.selectedList = list;
            this.datalist = [];
            this.currentPage = 1;
            this.jumperPage = '1';
            this.pageSize = 10;
            this.dialogVisible = true;
        },
        handleDialogOpen: function () {
            this.getDataList();
        },
        /**
         * 搜索设备列表
         */
        searchList: function () {
            this.getDataList();
        },
        refresh: function () {
            this.keyword = '';
            this.searchType = 'PackageName';
            this.getDataList();
        },
        /**
         * 获取设备列表
         */
        getDataList: function () {
            this.datalist = [];
            var orderBy = this.sortParam.prop + ' ' + this.sortParam.order
            var queryParam = {
                ip: this.FDIp,
                "pageNo": this.currentPage,
                "pageSize": this.pageSize,
                orderby: orderBy
            }
            if (this.keyword) {
                queryParam.filter = this.searchType + " has " + "'" + this.keyword + "'"
            }
            this.emptyText = this.i18ns.common.loading;
            var that = this;
            upgradePackageManage.getPackageList(queryParam, function (res) {
                if (res.code == 0) {
                    if (res.data[0].data.Members) {
                        that.datalist = res.data[0].data.Members;
                        Vue.nextTick(function () {
                            _.each(that.selectedList, function (item) {
                                var row = _.find(that.datalist, function (x) {
                                    return x.UUID == item.UUID;
                                });
                                if (row) {
                                    that.$refs['choicePackagesTable'].toggleRowSelection(row, true);
                                } else {
                                    if (queryParam.pageNo == 1) {
                                        that.$refs['choicePackagesTable'].toggleRowSelection(item, true);
                                    }
                                }
                            })
                        })
                    }
                    that.total = res.data[0].data[
                        'Members@odata.count']
                } else {
                    var msg = getErrorMsg(res);
                    alertMsg(msg);
                }

            });
        },
        /**
         * 获取服务器健康状态
         **/
        getServerStatusTxt: function (healthStatus) {
            return getServerStatusTxt(healthStatus);
        },
        handleSizeChange: function (val) {
            this.currentPage = 1;
            this.pageSize = val;
            this.getDataList();
        },
        handleCurrentChange: function (val) {
            this.currentPage = val;
            this.getDataList();
        },
        handleSelectionChange: function (val) {
        	// Modify: 2020/03/24 DTS2020030626924  修正升级包数量
            var arr = [];
            _.each(val, function (item) {
                if (arr.findIndex(function (x) {
                        return x.UUID == item.UUID
                    }) < 0) {
                    arr.push(item)
                }
            })
            this.selectedList = arr;
        },
        submit: function () {
            //this.$emit('choice-packages', JSON.parse(JSON.stringify(this.selectedList)));
            this.$emit('choice-packages', this.selectedList);
            this.dialogVisible = false;
            this.datalist = [];

        },
        handleDialogClose: function () {
            this.$refs['choicePackagesTable'].clearSelection();
        },
        sortChange: function (data) {
            console.log(data, 'data');
            this.sortParam.prop = data.prop ? data.prop : 'PackageName';
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