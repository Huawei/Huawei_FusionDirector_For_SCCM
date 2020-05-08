Vue.component("batch-devices", {
    template: '#batchDevices',
    props: {
        showSelection: {
            type: Boolean,
            default: true
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {

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
            allList: [],
            jumperPage: "1"
        }
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {
        setDataList: function (list) {
            this.allList = list;
            if (this.isSelected) {
                this.allList = JSON.parse(JSON.stringify(list))
                this.allList = _.filter(this.allList, function (o) {
                    return o.isSelected;
                });
            }

            this.currentPage = 1;
            this.jumperPage = '1';
            this.total = this.allList.length;
            this.datalist = this.allList;
            this.getListData();
        },
        getListData: function () {
            this.currentPageListData = _.slice(this.datalist, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
            var that = this;

            Vue.nextTick(function () {
                // _.each(that.currentPageListData, function (row) {
                //     that.$refs['batchDevicesTable'].toggleRowSelection(row, true);
                // })
                /*    that.$refs['selectedDevicesTable'].clearSelection();
                   that.$refs['selectedDevicesTable'].toggleAllSelection(); */
            })
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
            this.getListData();

        },
        handleCurrentChange: function (val) {
            this.currentPage = val;
            this.getListData();
        },
        handleSelectionChange: function (val) {
            this.selectedList = val;
            this.$emit('choice-batch-devices', val);
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