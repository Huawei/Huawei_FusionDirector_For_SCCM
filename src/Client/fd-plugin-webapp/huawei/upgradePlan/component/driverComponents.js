Vue.component("driver-component", {
    template: '#driverComponent',
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
            canSelectNum: 0
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

    }
});