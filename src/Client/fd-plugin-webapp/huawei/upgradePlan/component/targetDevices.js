Vue.component("target-devices", {
    template: '#targetDevices',
    props: {
        showSelection: {
            type: Boolean,
            default: true
        }
    },
    data: function () {
        return {
            isSelectAll: true,
            datalist: [],
            currentPageListData: [],
            selectedList: [],
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            columns: [{
                prop: "Component",
                label: "deviceVersionStatus_component"
            }, {
                prop: "Model",
                label: "deviceVersionStatus_model"
            }, {
                prop: "Manufacturer",
                label: "deviceVersionStatus_manufacturer"
            }, {
                prop: "InstalledVersion",
                label: "deviceVersionStatus_currentVersion"
            }],
            jumperPage: "1"
        }
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {
        setDataList: function (list, isSelectAll) {
            this.$refs['selectedDevicesTable'].clearSelection();
            this.currentPage = 1;
            this.jumperPage = '1';
            this.total = list.length;
            this.datalist = list;
            this.isSelectAll = isSelectAll;
            if (isSelectAll) {
                this.selectedList = list;
            }
            this.getListData();
        },
        getListData: function () {
            this.currentPageListData = _.slice(this.datalist, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
            var that = this;
            if (this.isSelectAll) {
                Vue.nextTick(function () {
                    _.each(that.selectedList, function (item) {
                        var row = _.find(that.currentPageListData, function (x) {
                            return x.ID == item.ID;
                        });
                        if (row) {
                            that.$refs['selectedDevicesTable'].toggleRowSelection(row, true);
                        } else {
                            if (that.currentPage == 1) {
                                that.$refs['selectedDevicesTable'].toggleRowSelection(item, true);
                            }
                        }
                    })
                })
            } else {
                that.$refs['selectedDevicesTable'].clearSelection();
            }
        },
        /**
         * 获取服务器健康状态
         **/
        getServerStatusTxt: function (healthStatus) {
            return getServerStatusTxt(healthStatus);
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
            this.selectedList = val;
            this.$emit('choice-target-devices', val);
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