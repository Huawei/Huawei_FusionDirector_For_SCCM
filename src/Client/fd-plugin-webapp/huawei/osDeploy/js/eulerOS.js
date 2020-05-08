Vue.component('EulerOS', {
    template: `<div>
    <div class="dashBorder"></div><span class="infoTitle">{{i18ns.OSDeploy.deploy_installInfo}}</span>
    <el-row>
        <el-form label-position="left" :model="deployForm" :rules="rules" ref="deployForm" label-width="250px">
            <el-form-item :label="i18ns.OSDeploy.deploy_cpFirstNameLinux">
                <el-input :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="HostName" disabled>
                </el-input>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.OSDeploy_rootPasswordColon" prop="RootPwd">
                <el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter"
                    v-model="deployForm.RootPwd"></el-input>
            </el-form-item>
            </el-col>
            <el-form-item :label="i18ns.OSDeploy.deploy_passwordConfirmedAgain" prop="againPwd">
                <el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter"
                    v-model="deployForm.againPwd"></el-input>
            </el-form-item>
            </el-col>
            <el-form-item :label="i18ns.OSDeploy.deploy_installPlacePartition" prop="AutoPart">
                <el-row>
                    <el-radio v-model="deployForm.AutoPart" :label="true">
                        {{i18ns.OSDeploy.deploy_autoPartition}}</el-radio>
                </el-row>
                <el-row>
                    <el-radio v-model="deployForm.AutoPart" :label="false">
                        {{i18ns.OSDeploy.deploy_definedPartition}}</el-radio>
                    <span style="color: #999999"> &nbsp;&nbsp;&nbsp;&nbsp;
                        {{i18ns.OSDeploy.OSDeploy_rootPartitionTip1}}</span>
                </el-row>
                <el-row v-show="!deployForm.AutoPart">
                    <el-table v-bind:data="Partition" border style="width: 100%" class="partition">
                        <el-table-column v-bind:label="i18ns.OSDeploy.OSDeploy_rootPartition">
                            <template slot-scope="scope">
                                <template v-if="scope.$index===0">
                                    {{i18ns.OSDeploy.OSDeploy_swapPartition}}
                                </template>
                                <template v-else>
                                    {{i18ns.OSDeploy.OSDeploy_rootPartition+'-'+scope.$index}}
                                </template>
                            </template>
                        </el-table-column>
                        <el-table-column v-bind:label="i18ns.common.name">
                            <template slot-scope="scope">
                                <template v-if="scope.$index<2">
                                    {{scope.row.Name}}
                                </template>
                                <template v-else>
                                    <el-popover placement="top" width="200" trigger="manual"
                                        :content="scope.row.NameValidate.TipTxt"
                                        v-model="scope.row.NameValidate.isShowTip" :ref="'Name'+scope.$index">
                                    </el-popover>
                                    <el-input v-popover="'Name'+scope.$index" v-model="scope.row.Name"
                                        @focus="validateName(scope.$index,scope.row.Name)"
                                        @blur="scope.row.NameValidate.isShowTip=false"
                                        v-on:change="validateName(scope.$index,scope.row.Name)"
                                        v-on:input="validateName(scope.$index,scope.row.Name)">
                                    </el-input>
                                </template>
                            </template>
                        </el-table-column>
                        <el-table-column v-bind:label="i18ns.imageManage.imageManage_imageFilleTypeColon">
                            <template slot-scope="scope">
                                <template v-if="scope.$index===0">
                                    swap
                                </template>
                                <template v-else>
                                    <el-select v-model="scope.row.Filesystem" style="width:90px;"
                                        class="filesystem">
                                        <el-option v-for="(item,index) in filesystems" :key="item" :label="item" :value="item"></el-option>
                                    </el-select>
                                </template>
                            </template>
                        </el-table-column>
                        <el-table-column v-bind:label="i18ns.OSDeploy.OSDeploy_systemCapacity">
                            <template slot-scope="scope">
                                <el-popover placement="top" width="200" trigger="manual"
                                    :content="scope.row.SizeValidate.TipTxt"
                                    v-model="scope.row.SizeValidate.isShowTip" :ref="'Size'+scope.$index">
                                </el-popover>
                                <el-input v-popover="'Size'+scope.$index" v-model="scope.row.Size"
                                    onKeyPress="preventNonNum(event)"
                                    @focus="validateSize(scope.$index,scope.row.Size)"
                                    @blur="scope.row.SizeValidate.isShowTip=false"
                                    v-on:change="validateSize(scope.$index,scope.row.Size)"
                                    v-on:input="validateSize(scope.$index,scope.row.Size)">
                                </el-input>
                            </template>
                        </el-table-column>
                        <el-table-column v-bind:label="i18ns.common.operation" width="80">
                            <template slot-scope="scope">
                                <el-button type="text" icon="el-icon-plus" size="small"
                                    v-on:click="addPartition()">
                                </el-button>
                                </el-button>
                                <el-button v-show="scope.$index>1" type="text" icon="el-icon-minus" size="small"
                                    v-on:click="deletePartition(scope.$index)">
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_OSLanguage" prop="OsLanguage">
                <el-select v-model="deployForm.OsLanguage">
                    <el-option v-for="item in Language" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
                <i class="el-icon-warning"
                    style="color: #409eff;"></i>&nbsp;{{i18ns.OSDeploy.OSDeploy_languageTip}}
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_keyBoard" prop="KeyBoard">
                <el-select v-model="deployForm.KeyBoard">
                    <el-option v-for="item in Keyboard" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_timeZone" prop="Timezone">
                <el-select v-model="deployForm.Timezone">
                    <el-option v-for="item in Timezone" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-row>
</div>`,
    data: function () {
        return {
            i18ns: [],
            deployForm: {
                RootPwd: '',
                AutoPart: true,
                OsLanguage: '',
                Timezone: '',
                KeyBoard: '',
                Partition: [],
                againPwd: '',
                Software: [], //勾选安装iBMA时默认传，不选时传空数组
                SyncData: {
                    SyncRaid: false
                }, //默认传递字段
                SupportIbma: true,
                PreHostName: '' //默认传递字段
            },
            HostName: 'localhost',
            Partition: [],
            rules: {
                RootPwd: [{
                    required: true,
                    validator: function (rule, value, callback) {
                        console.log(value.indexOf(" "))
                        if (value) {
                            var reg1 = /[\s\#\$]+/;
                            if (getBytes(value) < 6 || reg1.test(value)) {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_errorPasswordLinux));
                            } else {
                                return callback();
                            }
                        } else {
                            return callback(new Error(app.i18ns.FDConfig.pwdNull));
                        }
                    },
                    trigger: 'change'
                }],
                againPwd: {
                    required: true,
                    validator: function (rule, value, callback) {
                        if (value) {
                            if (value != app.$refs['deployModelInfo'].deployForm.RootPwd) {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_differentPasswordError));
                            } else
                                return callback();
                        } else {
                            return callback(new Error(app.i18ns.FDConfig.pwdNull));
                        }
                    },
                    trigger: 'change'
                },
            },
            Language: [], //语言
            Keyboard: [], //键盘选项
            Timezone: [], //时区
            SupportIbma: [],
            filesystems: []
        }
    },
    props: {
        FDIp: String,
        form: Object,
        version: String
    },
    created: function () {
        this.i18ns = getIn18();
    },
    mounted: function () {
        var app = this;
        console.log(this.version);
        this.Partition = [{
                "Filesystem": "swap",
                "Name": "swap",
                "Size": "",
                "NameValidate": {
                    "isOK": true,
                    "isShowTip": false,
                    "TipTxt": this.i18ns.OSDeploy.OSDeploy_swapPartTip
                },
                "SizeValidate": {
                    "isOK": false,
                    "isShowTip": false,
                    "TipTxt": this.i18ns.OSDeploy.OSDeploy_rootPartTip
                }
            }, {
                "Name": "/",
                "Filesystem": this.filesystems[0],
                "Size": "",
                "NameValidate": {
                    "isOK": true,
                    "isShowTip": false,
                    "TipTxt": this.i18ns.OSDeploy.OSDeploy_rootPartName
                },
                "SizeValidate": {
                    "isOK": false,
                    "isShowTip": false,
                    "TipTxt": this.i18ns.OSDeploy.OSDeploy_rootPartTip
                }
            }],
            Vue.nextTick(function () {
                app.selectImage()
            })
    },
    methods: {
        /**
         * 获取RedHat 的时区，语言，键盘数据
         */
        selectImage: function () {
            var param = {
                ip: this.FDIp,
                data: {
                    OsType: "EulerOS",
                    SubType: this.version
                }
            };
            var app = this;
            serverprofileManage.getImageQuery(param, function (ret) {
                if (ret.code == '0') {
                    app.Language = ret.data[0].data.Result.Attribute.Language;
                    app.Keyboard = ret.data[0].data.Result.Attribute.Keyboard;
                    app.Timezone = ret.data[0].data.Result.Attribute.Timezone;
                    app.deployForm.OsLanguage = ret.data[0].data.Result.Attribute.Language[0];
                    app.deployForm.Timezone = ret.data[0].data.Result.Attribute.Timezone[0];
                    app.deployForm.KeyBoard = ret.data[0].data.Result.Attribute.Keyboard[0];
                    var partition = _.filter(ret.data[0].data.Result.Partition, {
                        'SubType': app.version
                    })
                    if (partition.length > 0) {
                        app.filesystems = partition[0].FileSystem;
                        app.Partition[1].Filesystem = app.filesystems[0];
                    }
                    if (app.form) {
                        app.deployForm.Cdkey = app.form.Cdkey;
                        app.deployForm.RootPwd = '';
                        app.deployForm.PreHostName = app.form.PreHostName;
                        app.deployForm.AutoPart = app.form.AutoPart;
                        app.deployForm.OsLanguage = app.form.OsLanguage;
                        app.deployForm.Timezone = app.form.Timezone;
                        app.deployForm.KeyBoard = app.form.KeyBoard;
                        app.deployForm.Partition = app.form.Partition;
                        if (!app.form.AutoPart) {
                            app.Partition = _.map(app.form.Partition, function (x) {
                                return {
                                    "Filesystem": x.Filesystem,
                                    "Name": x.Name,
                                    "Size": x.Size,
                                    "NameValidate": {
                                        "isOK": true,
                                        "isShowTip": false,
                                        "TipTxt": app.i18ns.OSDeploy.OSDeploy_swapPartTip
                                    },
                                    "SizeValidate": {
                                        "isOK": true,
                                        "isShowTip": false,
                                        "TipTxt": app.i18ns.OSDeploy.OSDeploy_rootPartTip
                                    }
                                }
                            })
                        }
                        app.deployForm.Option = app.form.Option;
                        app.deployForm.againPwd = '';
                        app.deployForm.SupportIbma = app.form.SupportIbma;
                    }
                } else {
                    if (ret.ip != app.FDIp) {
                        return false
                    }
                    var msg = getErrorMsg(ret);
                    alertMsg(msg);
                }
            })
        },
        validateName: function (index, val) {
            var reg = /[<>|:&\s]/g; //出现\\ <>|:&空格
            var reg1 = /^[^/]/; //不以/大头
            if (reg.test(val) || reg1.test(val) || !val) {
                this.Partition[index].NameValidate.isShowTip = true;
                this.Partition[index].NameValidate.isOK = false;
                this.Partition[index].NameValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_rootPartName;

            } else {
                if (_.filter(this.Partition, function (x) {
                        return x.Name == val;
                    }).length > 1) {
                    this.Partition[index].NameValidate.isShowTip = true;
                    this.Partition[index].NameValidate.isOK = false;
                    this.Partition[index].NameValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_rootPartRepeatName;
                } else {
                    this.Partition[index].NameValidate.isShowTip = false;
                    this.Partition[index].NameValidate.isOK = true;
                    this.Partition[index].NameValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_rootPartName;
                }
            }
        },

        validateSize: function (index, val) {
            var reg = /^[0-9]*$/;
            if (!reg.test(val) || !val) {
                this.Partition[index].SizeValidate.isShowTip = true;
                this.Partition[index].SizeValidate.isOK = false;
                if (index == 0) {
                    this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_swapPartTip;
                } else if (index == 1) {
                    this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_rootPartTip;
                } else {
                    this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_PartTip;
                }
            } else {
                if (index == 1 && parseInt(val) < 10) {
                    this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_rootPartTip;
                    this.Partition[index].SizeValidate.isShowTip = true;
                    this.Partition[index].SizeValidate.isOK = false;
                }else if(val==0){
                    this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_swapPartTip;
                    this.Partition[index].SizeValidate.isShowTip = true;
                    this.Partition[index].SizeValidate.isOK = false;
                }   else {
                    if (val.length > 8) {
                        this.Partition[index].SizeValidate.isShowTip = true;
                        this.Partition[index].SizeValidate.isOK = false;
                        this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.valid_maxSize_info;
                    } else {
                        this.Partition[index].SizeValidate.isShowTip = false;
                        this.Partition[index].SizeValidate.isOK = true;
                        this.Partition[index].SizeValidate.TipTxt = this.i18ns.OSDeploy.OSDeploy_PartTip;
                    }
                }
            }
        },
        addPartition: function () {
            this.Partition.push({
                "Name": "",
                "Filesystem": this.filesystems[0],
                "Size": "",
                "NameValidate": {
                    "isOK": false,
                    "isShowTip": false,
                    "TipTxt": this.i18ns.OSDeploy.OSDeploy_rootPartName
                },
                "SizeValidate": {
                    "isOK": false,
                    "isShowTip": false,
                    "TipTxt": this.i18ns.OSDeploy.OSDeploy_PartTip
                }
            })
        },
        deletePartition: function (index) {
            this.Partition.splice(index, 1);
        },
        ibmaChange: function (val) {
            if (val) {
                this.deployForm.Software = [{
                    "FileName": "iBMA"
                }];
            } else {
                this.deployForm.Software = [];
            }
        },
        validatePartition: function () {
            for (var i = 0; i < this.Partition.length; i++) {
                if (!this.Partition[i].NameValidate.isOK) {
                    this.validateName(i, this.Partition[i].Name);
                    return false;
                }
                if (!this.Partition[i].SizeValidate.isOK) {
                    this.validateSize(i, this.Partition[i].Size);
                    return false;
                }
            }
            return true;
        },
        getInfo: function () {
            var that = this;
            if (that.deployForm.AutoPart) {
                return that.deployForm;
            } else {
                if (that.validatePartition()) {
                    that.deployForm.Partition = _.map(that.Partition, function (x) {
                        return {
                            Filesystem: x.Filesystem,
                            Name: x.Name,
                            Size: x.Size
                        }
                    });
                    return that.deployForm;
                } else {
                    return undefined;
                }
            }

        }

    }
})