Vue.component("target-baselines", {
    template: '#targetBaselines',
    props: {
        showSelection: {
            type: Boolean,
            default: true
        }
    },
    data: function () {
        return {
            dialogVisible: false,
            currentPageListData: [],
            datalist: [],
            selectedPackages: [],
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            jumperPage: "1"
        }
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {
        setDataList: function (list, selectedPackages) {
            this.currentPage = 1;
            this.jumperPage = '1';
            this.total = list.length;
            this.datalist = list;
            this.selectedPackages = JSON.parse(JSON.stringify(selectedPackages));
            this.getListData();
        },
        getListData: function () {
            this.currentPageListData = _.slice(this.datalist, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
            if (this.currentPageListData.length > 0) {
                var that = this;
                Vue.nextTick(function () {
                    _.each(that.selectedPackages, function (item) {
                        var row = _.find(that.currentPageListData[0].FirmwarePackages, function (x) {
                            return x.PackageName == item.PackageName;
                        });
                        if (row.Version[0].Selected === undefined || row.Version[0].Selected === true) {
                            if (that.$refs['packagesTable']) {
                                that.$refs['packagesTable'].toggleRowSelection(row, true);
                            }
                        }
                    })
                })
            }
        },

        handleSizeChange: function (val) {
            this.currentPage = 1;
            this.jumperPage = '1';
            this.pageSize = val;
            this.getListData();
        },
        handleCurrentChange: function (val) {
            this.currentPage = val;
            this.getListData();
        },
        handleSelectionChange: function (val) {
            this.selectedPackages = val;
            this.$emit('choice-target-baseline-package', val);
        },
        expandChange: function (a, b) {
            if (b.length > 0) {
                var that = this;
                setTimeout(function () {
                    _.each(that.selectedPackages, function (item) {
                        var row = _.find(that.currentPageListData[0].FirmwarePackages, function (x) {
                            return x.PackageName == item.PackageName;
                        });
                        if (row.Version[0].Selected === undefined || row.Version[0].Selected === true) {
                            if (that.$refs['packagesTable']) {
                                that.$refs['packagesTable'].toggleRowSelection(row, true);
                            }
                        }
                    })
                }, 0);

            }

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