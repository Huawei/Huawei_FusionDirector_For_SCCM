Vue.component("devices-group", {
    template: '#devicesGroup',
    props: {
        showCheckbox: {
            type: Boolean,
            default: true
        }
    },
    data: function () {
        return {
            dialogVisible: false,
            datalist: [],
            groupList: [],
            treeData: [],
            selectedGroups: [],
            FDIp: '',
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            emptyText: '',
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
            defaultProps: {
                children: 'children',
                label: 'name'
            },
            jumperPage: "1"
        }
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {
        init: function (ip, groupList, selectedGroups, EnableGroupIDs) {

            this.FDIp = ip;
            if (groupList.length == 0) {
                this.datalist = [];
                this.treeData = [];
            } else {
                if (EnableGroupIDs && EnableGroupIDs.length > 0) {
                    _.each(groupList, function (item) {
                        if (_.findIndex(EnableGroupIDs, function (y) {
                                return y == (item.id + '')
                            }) < 0) {
                            item['disabled'] = true;
                        }
                    })
                }
                this.groupList = groupList;
                this.treeData = [{
                    id: -1,
                    name: this.i18ns.upgradePlan.upgradePlan_allGroup,
                    children: []
                }];

                this.treeData[0].children = groupList;
                this.selectedGroups = selectedGroups;
                var that = this;
                Vue.nextTick(function () {
                    var keys = _.map(that.selectedGroups, 'name');
                    that.$refs['groupTree'].setCheckedKeys(keys);
                })

                this.getDataList();
            }
        },
        resetChecked: function () {
            this.$refs['groupTree'].setCheckedKeys([]);
        },
        /**
         * 获取设备列表
         */
        getDataList: function () {
            if (!this.FDIp) {
                return false;
            }
            this.datalist = [];
            var orderBy = this.sortParam.prop + ' ' + this.sortParam.order
            var queryParam = {
                ip: this.FDIp,
                "pageNo": this.currentPage,
                "pageSize": this.pageSize,
                orderby: orderBy
            }
            var groupNames = _.map(this.selectedGroups, 'name');
            if (groupNames.length > 0) {
                queryParam.filter = "";
                for (let i = 0; i < groupNames.length; i++) {
                    queryParam.filter += "Group eq '" + groupNames[i] + "'";
                    if ((i + 1) != groupNames.length) {
                        queryParam.filter += ' or '
                    }
                }
            } else {
                this.total = 0;
                return false;
                queryParam.filter = "Group  eq ' '"
            }
            this.emptyText = this.i18ns.common.loading;
            var that = this;
            upgradePackageManage.getGroupDevices(queryParam, function (res) {
                if (res.code == 0) {
                    if (res.data[0].data.Members) {
                        for (var i = 0; i < res.data[0].data.Members.length; i++) {
                            var item = res.data[0].data.Members[i];
                            var obj = item.Server;
                            obj["Type"] = item.Type;
                            obj["Group"] = item.Group;
                            that.datalist.push(obj);
                        }
                    }
                    that.total = res.data[0].data[
                        'Members@odata.count']
                } else {
                    that.total = 0;
                    that.datalist = [];
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
        sortChange: function (data) {
            console.log(data, 'data');
            this.sortParam.prop = data.prop ? data.prop : 'IP';
            this.sortParam.order = data.order == 'descending' ? 'desc' : 'asc'
            this.getDataList();
        },
        treeNodeChcek: function (a, data) {
            this.selectedGroups = _.filter(data.checkedNodes, function (x) {
                return x.id > 0;
            });
            this.getDataList();
            this.$emit("tree-node-chcek", this.selectedGroups);
        },
        clearDataList: function () {
            this.datalist = [];
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