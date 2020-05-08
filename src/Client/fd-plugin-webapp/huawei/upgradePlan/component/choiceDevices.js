Vue.component("choice-devices", {
    template: '#choiceDevices',
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
            searchType: 'IP',
            searchTypes: [],
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
            sortParam: {
                order: 'asc',
                prop: 'IP'
            },
            isCompleted: false,
            jumperPage: "1"

        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.searchTypes = [{
                id: 'IP',
                label: this.i18ns.deviceVersionStatus.deviceVersionStatus_Address
            },
            {
                id: 'Model',
                label: this.i18ns.deviceVersionStatus.deviceVersionStatus_model
            },
            {
                id: 'OSVersion',
                label: this.i18ns.upgradePlan.upgradePlan_OSVersion
            },
            {
                id: 'Type',
                label: this.i18ns.deviceVersionStatus.deviceVersionStatus_type
            },
            {
                id: 'SN',
                label: this.i18ns.deviceVersionStatus.deviceVersionStatus_serialNumber
            }
        ]
    },
    methods: {
        openDialog: function (ip, list) {
            this.currentPage = 1;
            this.jumperPage = '1';
            this.pageSize = 10;
            this.FDIp = ip;
            this.datalist = [];
            this.selectedList = list;
            this.dialogVisible = true;
            this.keyword = '';
            this.searchType = 'IP';
            this.sortParam.order = 'asc';
            this.sortParam.prop = 'IP';

        },
        handleDialogOpen: function () {
            this.getDataList();
            app.isCompleted = true;
        },
        /**
         * 搜索设备列表
         */
        searchList: function () {
            this.getDataList();
        },
        refresh: function () {
            this.keyword = '';
            this.searchType = 'IP';
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
            upgradePackageManage.getDevices(queryParam, function (res) {
                this.datalist = [];
                if (res.code == 0) {
                    if (res.data[0].data.Members) {
                        var objs = [];
                        for (var i = 0; i < res.data[0].data.Members.length; i++) {
                            var item = res.data[0].data.Members[i];
                            //Modify: 2020/04/21 DTS2020042111654 Chassis 机框当前不支持
                            if (item.Type == 'Chassis') {
                                continue;
                            }
                            var obj = item.Server;
                            obj["Type"] = item.Type;
                            obj["Group"] = item.Group;
                            objs.push(obj);
                        }
                        that.datalist = objs;
                        Vue.nextTick(function () {
                            if (that.datalist.length > 0) {
                                _.each(that.selectedList, function (item) {
                                    var row = _.find(that.datalist, function (x) {
                                        return x.ID == item.ID;
                                    });
                                    if (row) {
                                        that.$refs['addDevicesTable'].toggleRowSelection(row, true);
                                    } else {
                                        if (queryParam.pageNo == 1) {
                                            that.$refs['addDevicesTable'].toggleRowSelection(item, true);
                                        }
                                    }
                                })
                            }

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
                        return x.ID == item.ID
                    }) < 0) {
                    arr.push(item)
                }
            })
            this.selectedList = arr;
        },
        submit: function () {
            this.$emit('choice-devices', JSON.parse(JSON.stringify(this.selectedList)));
            this.dialogVisible = false;
            this.datalist = [];

        },
        handleDialogClose: function () {
            this.$refs['addDevicesTable'].clearSelection();
        },
        sortChange: function (data) {
            if (app.isCompleted) {
                this.sortParam.prop = data.prop ? data.prop : 'IP';
                this.sortParam.order = data.order == 'descending' ? 'desc' : 'asc'
                this.getDataList();
            }
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