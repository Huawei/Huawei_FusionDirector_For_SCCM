Vue.component("upgrade-report", {
    template: '#upgradeReport',
    props: {},
    data: function () {
        return {
            checkAll: true,
            isIndeterminate: false,
            datalist: [],
            currentPageListData: [],
            selectedList: [],
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            headerCheckboxDisabled: true,
            jumperPage: '1'
        }
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {
        setDataList: function (list) {
            this.currentPage = 1;
            this.jumperPage = '1';
            this.total = list.length;
            this.datalist = list;
            this.headerCheckboxDisabled = _.filter(list, {
                'checkboxDisabled': false
            }).length == 0;
            selectedLength = _.filter(list, {
                'isSelected': true
            }).length;
            this.isIndeterminate = _.filter(list, {
                'isIndeterminate': true
            }).length > 0
            this.checkAll = (!this.headerCheckboxDisabled && !this.isIndeterminate && selectedLength > 0);
            this.getListData();
        },
        getListData: function () {
            this.currentPageListData = _.slice(this.datalist, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
            /*  var that = this;
             Vue.nextTick(function () {
                 that.$refs['upgradeReportTable'].clearSelection();
                 that.$refs['upgradeReportTable'].toggleAllSelection();
             }) */
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

        /**
         * 列表内checkbox改变事件
         */
        checkboxChange: function (index, row) {
            this.currentPageListData[index].isIndeterminate = false;
            for (var i = 0; i < this.currentPageListData[index].Server.Components.length; i++) {
                if (!this.currentPageListData[index].Server.Components[i].checkboxDisabled) {
                    this.currentPageListData[index].Server.Components[i].isSelected = row.isSelected;
                }
            }
            this.change();
        },
        /**
         * 服务器子组件checkbox改变事件
         * @param index - 父级在当前页的索引
         * @param selectList - 目前子级的选中项
         * @param canSelectNum - 子级可选数量
         * @param children - 当前改变的子级
         **/
        childrenCheckBoxChange: function (index, selectList, canSelectNum, children) {
            var componentsIndex = _.findIndex(this.currentPageListData[index].Server.Components, function (x) {
                return x.ID == children.ID;
            })
            this.currentPageListData[index].Server.Components[componentsIndex].isSelected = children.isSelected;
            if (selectList.length == 0) {
                this.currentPageListData[index].isIndeterminate = false;
                this.currentPageListData[index].isSelected = false;
            } else if (selectList.length < canSelectNum) {
                this.currentPageListData[index].isSelected = true;
                this.currentPageListData[index].isIndeterminate = true;
            } else {
                this.currentPageListData[index].isSelected = true;
                this.currentPageListData[index].isIndeterminate = false;
            }

            this.change();
        },
        /**
         * 表头全选checkbox改变事件
         */
        allCheckboxChange: function () {
            this.isIndeterminate = false;
            for (var i = 0; i < this.datalist.length; i++) {
                this.datalist[i].isSelected = this.checkAll;
                this.datalist[i].isIndeterminate = false;
                for (var j = 0; j < this.datalist[i].Server.Components.length; j++) {
                    if (!this.datalist[i].Server.Components[j].checkboxDisabled) {
                        this.datalist[i].Server.Components[j].isSelected = this.checkAll;
                    }
                }
            }
        },

        change: function () {
            var selectedList = _.filter(this.datalist, {
                isSelected: true
            });
            if (selectedList.length == 0) {
                this.isIndeterminate = false;
                this.checkAll = false;
            } else if (selectedList.length < this.datalist.length) {
                this.isIndeterminate = true;
                this.checkAll = false;
            } else {
                var bl = false;
                for (var i = 0; i < this.datalist.length; i++) {
                    for (var j = 0; j < this.datalist[i].Server.Components.length; j++) {
                        if (!this.datalist[i].Server.Components[j].checkboxDisabled) {
                            if (!this.datalist[i].Server.Components[j].isSelected) {
                                bl = true;
                            }
                        }
                    }
                }
                this.isIndeterminate = bl;
                this.checkAll = !bl;
            }

        },
        submit: function () {
            var selectedList = _.filter(this.datalist, {
                isSelected: true
            });
            return selectedList;
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