Vue.component("device-version", {
    template: ' <div>' +
        '<el-table :data="list" :stripe="stripe" :border="border" header-row-class-name="my_table_header">' +
        '<el-table-column v-for="(item,index) in columns" :prop="item.prop" :label="i18ns.deviceVersionStatus[item.label]" :key="index" :show-overflow-tooltip="true"> </el-table-column>' +
        '</el-table>' +
        '<el-row class="pagination-row">' +
        '<el-col v-bind:span="24" style="text-align:right;" v-if="allList.length<10">' +
        ' {{i18ns.common.common_totalNumber}}{{allList.length}}' +
        '</el-col>' +
        ' <el-col v-bind:span="24" style="text-align:right;" v-else>' +
        ' <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"' +
        '  v-bind:current-page="currentPage" v-bind:page-sizes="pageSizes" v-bind:page-size="pageSize"' +
        '  layout="total, sizes, prev, pager, next,slot" v-bind:total="allList.length">' +
        '  </el-pagination>' +
        ' </el-col>' +
        ' </el-row>' +
        '</div>',
    props: {
        datalist: Array,
        columns: Array,
        stripe: Boolean,
        border: Boolean,
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            allList: [],
            list: [],
            currentPage: 1,
            pageSizes: [10, 20, 50, 100],
            pageSize: 10,
            total: 0,
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.getListData();
    },
    methods: {
        getListData: function () {
            this.allList = this.datalist;
            if (this.isSelected) {
                this.allList = JSON.parse(JSON.stringify(this.datalist))
                this.allList = _.filter(this.allList, function (o) {
                    return o.isSelected;
                });
            }
            this.list = _.slice(this.allList, (this.currentPage - 1) * this.pageSize, this
                .pageSize * this.currentPage);
        },
        /**
         * 设置当前显示数据的总数
         * 
         * @param {any} val 
         */
        handleSizeChange: function (val) {
            this.currentPage = 1;
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
    }
});