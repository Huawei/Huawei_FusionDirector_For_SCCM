Vue.component("server-component", {
    template: '#serverComponent',
    props: {
        datalist: Array,
        minspversion: String,
        minbmcversionforspupgrade: String,
        parentindex: Number,
        showAll: {
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
            currentPageListData: [],
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
            list: [],
            selectedList: [],
            canSelectNum: 0,
            jumperPage: "1"
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.getListData();
    },
    methods: {
        getListData: function () {

            this.list = this.datalist;
            if (!this.showAll) {
                this.list = _.filter(this.list, {
                    'Selected': true
                });
            }
            if (this.isSelected) {
                this.list = _.filter(this.list, {
                    'isSelected': true
                });
            }
            // this.list = _.orderBy(list, ['sort'], ['asc']);
            this.currentPageListData = _.slice(this.list, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
        },
        /**
         * 设置当前显示数据的总数
         * 
         * @param {any} val 
         */
        handleSizeChange: function (val) {
            this.currentPage = 1;
            this.jumperPage = '1';
            this.pageSize = val;
            this.getListData();
        },
        /**
         * 切换当前显示页
         * 
         * @param {any} val 
         */
        handleCurrentChange: function (val) {
            this.currentPage = val;
            this.getListData();
        },
        checkBoxChange: function (index, row) {
            var list = _.filter(this.datalist, {
                isSelected: true
            });
            var canSelectNum = _.filter(this.datalist, {
                checkboxDisabled: false
            }).length;

            var that = this;
            if (this.currentPageListData[index].UpgradeableStatus == 'SPCanUpgrade' && row.isSelected) {
                this.$confirm("<p style='color: #000; font-weight: 500; font-size: 14px; margin-bottom: 5px;'>" +
                    this.i18ns.upgradePlan.upgradePlan_confirmSP + "</p>" +
                    this.i18ns.upgradePlan.upgradePlan_SPCanUpgradeOne + "<br/>" + this.i18ns
                    .upgradePlan.upgradePlan_SPCanUpgradeTwo,
                    this.i18ns.FDConfig.critical, {
                        dangerouslyUseHTMLString: true,
                        confirmButtonText: app.i18ns.common.confirm,
                        cancelButtonText: app.i18ns.common.cancel,
                        closeOnClickModal: false,
                        type: 'warning'
                    }).then(function () {

                }).catch(function () {
                    that.currentPageListData[index].isSelected = false;
                    var _list = _.filter(that.datalist, {
                        isSelected: true
                    });
                    that.$emit('children-checkbox-change', that.parentindex, _list, canSelectNum, row);
                })
            }
            this.$emit('children-checkbox-change', this.parentindex, list, canSelectNum, row);
        },
        setCheckBoxChecked: function (isChecked) {
            for (var i = 0; i < this.datalist.length; i++) {
                if (this.datalist[i].UpgradeableStatus == 'CanUpgrade') {
                    this.datalist[i].isSelected = isChecked;
                }
            }
        },
        /**
         * 隐藏展开图标
         */
        getClassName: function (row, expandedRows) {
            console.log(row)
            var res = [];
            if (row.row.DriverInfo && row.row.DriverInfo.length >= 1) {
                res.push('hide-padding')
            } else {
                res.push('row-expand-cover')
            }
            return res.join(' ')
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