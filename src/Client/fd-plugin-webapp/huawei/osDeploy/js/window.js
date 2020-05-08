Vue.component('Windows', {
    template: `<div>
    <div class="dashBorder"></div><span class="infoTitle">{{i18ns.OSDeploy.deploy_installInfo}}</span>
    <el-row>
        <el-form label-position="left" :model="deployForm" :rules="rules" ref="deployForm" label-width="250px">
            <el-form-item :label="i18ns.OSDeploy.deploy_installCDKey">
                <el-row class="cdkey">
                    <el-col :span="4">
                        <el-popover :content="tipCdkeyDesc" placement="right" trigger="manual"
                            v-model="tipCdkey1">
                            <el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key1"
                                @keyup.native="setCDKey" :maxlength="5"></el-input>
                        </el-popover>
                    </el-col>
                    <el-col :span="1" style="text-align:center;">—</el-col>
                    <el-col :span="4">
                        <el-popover :content="tipCdkeyDesc" placement="right" trigger="manual"
                            v-model="tipCdkey2">
                            <el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key2"
                                @keyup.native="setCDKey" :maxlength="5"></el-input>
                        </el-popover>
                    </el-col>
                    <el-col :span="1" style="text-align:center;">—</el-col>
                    <el-col :span="4">
                        <el-popover :content="tipCdkeyDesc" placement="right" trigger="manual"
                            v-model="tipCdkey3">
                            <el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key3"
                                @keyup.native="setCDKey" :maxlength="5"></el-input>
                        </el-popover>
                    </el-col>
                    <el-col :span="1" style="text-align:center;">—</el-col>
                    <el-col :span="4">
                        <el-popover :content="tipCdkeyDesc" placement="right" trigger="manual"
                            v-model="tipCdkey4">
                            <el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key4"
                                @keyup.native="setCDKey" :maxlength="5"></el-input>
                        </el-popover>
                    </el-col>
                    <el-col :span="1" style="text-align:center;">—</el-col>
                    <el-col :span="4">
                        <el-popover :content="tipCdkeyDesc" placement="right" trigger="manual"
                            v-model="tipCdkey5">
                            <el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key5"
                                @keyup.native="setCDKey" :maxlength="5"></el-input>
                        </el-popover>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.OSDeploy_installOption" prop="Option">
                <el-select v-model="deployForm.Option">
                    <el-option v-for="item in Options" :key="item.Option" :label="item.Option"
                        :value="item.Option"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_cpFirstNameWin">
                <el-row>
                    <el-popover :content="i18ns.OSDeploy.OSDeploy_errorCPname" placement="right"
                        trigger="manual" v-model="hostName">
                        <el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter"
                            v-model="deployForm.PreHostName" :maxlength="5" @change="ValidationHostName">
                        </el-input>
                    </el-popover>
                    <el-tooltip effect="dark" :content="hostDesc" placement="right" style="padding-left:20px;">
                        <i class="el-icon-info" style="color:#409EFF;"></i>
                    </el-tooltip>
                </el-row><span style="color:#999999;">{{i18ns.OSDeploy.deploy_example}}<span
                        v-if="deployForm.PreHostName.length>0">{{deployForm.PreHostName}}</span><span
                        v-else>22930</span>10HB000002</span>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.OSDeploy_adminPasswordColon" prop="RootPwd">
                <el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.RootPwd"
                    ref="pwd"></el-input>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_passwordConfirmedAgain" prop="againPwd">
                <el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter"
                    v-model="deployForm.againPwd"></el-input>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_installPlacePartition" prop="AutoPart">
                <el-row>
                    <el-radio v-model="AutoPart" :label="true" @change="changeAutoPart">
                        {{i18ns.OSDeploy.deploy_autoPartition}}</el-radio>
                    <span style="color: #999999"> &nbsp;&nbsp;&nbsp;&nbsp;
                        {{i18ns.OSDeploy.deploy_autoPartDes}}</span>
                </el-row>
                <el-row>
                    <el-radio v-model="AutoPart" :label="false" @change="changeAutoPart">
                        {{i18ns.OSDeploy.deploy_definedPartition}}</el-radio>
                    <span style="color: #999999"> &nbsp;&nbsp;&nbsp;&nbsp;
                        {{i18ns.OSDeploy.OSDeploy_rootWindowsPartitionTip}}</span>
                </el-row>
                <el-row v-if="!AutoPart" class="autoPart">
                    <div style="width: 100px; line-height:30px; float:left;">
                        {{i18ns.OSDeploy.OSDeploy_systemCapacity+i18ns.common.colon}}</div>
                    <div style="width: 230px; line-height:30px; float:left;">
                        <el-popover placement="top" width="200" trigger="manual" :content="sizeTipTxt"
                            v-model="isShowSizeTip" ref="sizepop">
                        </el-popover>
                        <el-input v-popover="'sizepop'" onKeyPress="preventNonNum(event)"
                            @focus="validateSize(deployForm.Partition[0].Size)" @blur="isShowSizeTip=false"
                            v-on:change="validateSize(deployForm.Partition[0].Size)"
                            v-on:input="validateSize(deployForm.Partition[0].Size)"
                            :placeholder="i18ns.OSDeploy.deploy_entryDiskSizeInput"
                            v-model="deployForm.Partition[0].Size">
                        </el-input>
                        &nbsp;&nbsp;GB
                    </div>
                    <div style="width: 150px; line-height:30px; float:left;">
                        <el-tooltip effect="dark" :content="i18ns.OSDeploy.deploy_explainDisk" placement="right"
                            style="padding-left:20px;"><i class="el-icon-info" style="color:#409EFF;"></i>
                        </el-tooltip>
                    </div>
                </el-row>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_OSLanguage" prop="OsLanguage">
                <el-select v-model="deployForm.OsLanguage">
                    <el-option v-for="item in Language" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <i class="el-icon-warning"
                    style="color: #409eff;"></i>&nbsp;{{i18ns.OSDeploy.OSDeploy_languageTip}}
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_keyBoard" prop="KeyBoard">
                <el-select v-model="deployForm.KeyBoard">
                    <el-option v-for="item in Keyboard" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.deploy_timeZone" prop="Timezone">
                <el-select v-model="deployForm.Timezone">
                    <el-option v-for="item in Timezone" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="i18ns.OSDeploy.OSDeploy_iBMALable" prop="SupportIbma">
                <el-checkbox v-model="deployForm.SupportIbma" @change="ibmaChange">
                    {{i18ns.OSDeploy.OSDeploy_install}}</el-checkbox>
                <span v-if="!deployForm.SupportIbma" style="color: #EEAF76;"><i class="el-icon-warning"
                        style="color: #EEAF76;"></i>
                    &nbsp;{{i18ns.OSDeploy.OSDeploy_installTip}}</span>
            </el-form-item>
        </el-form>
    </el-row>
</div>
</div>`,
    data: function () {
        return {
            i18ns: [],
            deployForm: {
                Cdkey: '',
                RootPwd: '',
                PreHostName: '',
                AutoPart: false,
                OsLanguage: '',
                Timezone: '',
                KeyBoard: '',
                Option: '',
                Partition: [{
                    Filesystem: "NTFS",
                    Name: "C",
                    Size: "max"
                }],
                againPwd: '',
                Software: [{
                    "FileName": "iBMA"
                }], //勾选安装iBMA时默认传，不选时传空数组
                SyncData: {
                    SyncRaid: false
                }, //默认传递字段
                SupportIbma: true,
                PreHostName: '' //默认传递字段
            },
            key1: '',
            key2: '',
            key3: '',
            key4: '',
            key5: '',
            // againPwd:'',
            rules: {
                Option: {
                    required: true,
                    validator: function (rule, value, callback) {
                        if (value) {
                            return callback();
                        } else {
                            return callback(new Error(app.i18ns.FDConfig.pwdNull));
                        }
                    },
                    trigger: 'change'
                },
                RootPwd: [{
                    required: true,
                    validator: function (rule, value, callback) {
                        if (value) {
                            if (getBytes(value) < 6) {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_errorPasswordLength));
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
            Options: [], //安装选项
            Language: [], //语言
            Keyboard: [], //键盘选项
            Timezone: [], //时区
            hostName: false,
            tipCdkey1: false,
            tipCdkey2: false,
            tipCdkey3: false,
            tipCdkey4: false,
            tipCdkey5: false,
            tipCdkeyDesc: '',
            isCdkey: false,
            hostDesc: app.i18ns.OSDeploy.deploy_cpFirstNameWinExplain, //主机名称前缀的提示信息
            isShowSizeTip: false,
            sizeTipTxt: '',
            AutoPart: true
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
                    OsType: "Windows",
                    SubType: this.version
                }
            };
            var app = this;
            serverprofileManage.getImageQuery(param, function (ret) {
                if (ret.code == '0') {
                    app.Language = ret.data[0].data.Result.Attribute.Language;
                    app.Keyboard = ret.data[0].data.Result.Attribute.Keyboard;
                    app.Timezone = ret.data[0].data.Result.Attribute.Timezone;
                    var options = _.filter(ret.data[0].data.Result.SubType, function (item) {
                        return item.Version == app.version;
                    });
                    app.Options = options.length > 0 ? options[0].Options : [];
                    app.deployForm.OsLanguage = ret.data[0].data.Result.Attribute.Language[0];
                    app.deployForm.Timezone = ret.data[0].data.Result.Attribute.Timezone[0];
                    app.deployForm.KeyBoard = ret.data[0].data.Result.Attribute.Keyboard[0];
                    app.deployForm.Option = app.Options.length > 0 ? app.Options[0].Option : '';
                    if (app.form) {

                        app.deployForm.Cdkey = app.form.Cdkey;
                        app.deployForm.RootPwd = '';
                        app.deployForm.PreHostName = app.form.PreHostName;
                        app.deployForm.AutoPart = app.form.AutoPart;
                        app.deployForm.OsLanguage = app.form.OsLanguage;
                        app.deployForm.Timezone = app.form.Timezone;
                        app.deployForm.KeyBoard = app.form.KeyBoard;
                        app.deployForm.Partition = app.form.Partition;
                        app.deployForm.Option = app.form.Option;
                        app.deployForm.againPwd = '';
                        app.deployForm.SupportIbma = app.form.SupportIbma;
                        if (app.deployForm.Partition[0].Size == "max") {
                            app.AutoPart = true;
                        } else {
                            app.AutoPart = false;
                        }
                        app.key1 = app.form.Cdkey.split('-')[0];
                        app.key2 = app.form.Cdkey.split('-')[1]
                        app.key3 = app.form.Cdkey.split('-')[2]
                        app.key4 = app.form.Cdkey.split('-')[3]
                        app.key5 = app.form.Cdkey.split('-')[4]
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
        /**
         * 改变CDKey的值
         */
        setCDKey: function () {
            var nameRe = /^[a-zA-Z0-9]*$/;
            if (this.key1.length >= 1) {
                if (!nameRe.test($.trim(this.key1))) {
                    this.tipCdkey1 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key1.length == 5 && nameRe.test($.trim(this.key1))) {
                    this.tipCdkey1 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5;
                } else if (this.key1.length < 5) {
                    this.tipCdkey1 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey1 = false;
            }
            if (this.key2.length >= 1) {
                if (!nameRe.test($.trim(this.key2))) {
                    this.tipCdkey2 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key2.length == 5 && nameRe.test($.trim(this.key2))) {
                    this.tipCdkey2 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key2.length < 5) {
                    this.tipCdkey2 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey2 = false;
            }
            if (this.key3.length >= 1) {
                if (!nameRe.test($.trim(this.key3))) {
                    this.tipCdkey3 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key3.length == 5 && nameRe.test($.trim(this.key3))) {
                    this.tipCdkey3 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key3.length < 5) {
                    this.tipCdkey3 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey3 = false;
            }
            if (this.key4.length >= 1) {
                this.tipCdkey4 = true;
                this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                if (!nameRe.test($.trim(this.key4))) {
                    this.tipCdkey4 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key4.length == 5 && nameRe.test($.trim(this.key4))) {
                    this.tipCdkey4 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key4.length < 5) {
                    this.tipCdkey4 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey4 = false;
            }
            if (this.key5.length >= 1) {
                this.tipCdkey5 = true;
                this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                if (!nameRe.test($.trim(this.key5))) {
                    this.tipCdkey5 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key5.length == 5 && nameRe.test($.trim(this.key5))) {
                    this.tipCdkey5 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key5.length < 5) {
                    this.tipCdkey5 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey5 = false;
            }
        },
        isSetCdkey:function () {
            if (!this.key1 && !this.key2 && !this.key3 && !this.key4 && !this.key5) {
                this.deployForm.Cdkey = '';
            }
            if (this.key1.length == 5 && this.key2.length == 5 && this.key3.length == 5 && this.key4.length == 5 && this.key5.length == 5 && nameRe.test($.trim(this.key1)) && nameRe.test($.trim(this.key2)) && nameRe.test($.trim(this.key3)) && nameRe.test($.trim(this.key4)) && nameRe.test($.trim(this.key5))) {
                this.isCdkey = false
                return true
            } else {
                this.isCdkey = true
                return false
            }
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
        /**
         * 切换 安装位置分区方式
         */
        changeAutoPart: function (val) {
            if (!val) {
                this.deployForm.Partition[0].Size = ""
            } else {
                this.deployForm.Partition[0].Size = "max"
            }
        },
        /**
         * 校验主机名
         */
        ValidationHostName: function (val) {
            var cpNameRe = /^[a-zA-Z0-9_-]*$/;
            if (val.length >= 1) {
                this.hostDesc = app.i18ns.OSDeploy.deploy_cpFNWinExplain;
            } else {
                this.hostDesc = app.i18ns.OSDeploy.deploy_cpFirstNameWinExplain;
            }
            if (val.length >= 1 && !cpNameRe.test($.trim(val))) {
                this.hostName = true;

            } else {
                this.hostName = false;

            }
        },
        validateSize: function (val) {
            var reg = /^[0-9]*$/;
            if (!reg.test(val) || !val) {
                this.isShowSizeTip = true;
                this.sizeTipTxt = this.i18ns.OSDeploy.OSDeploy_errorDiskSize;
                return false;
            } else {
                if (parseInt(val) < 32) {
                    this.isShowSizeTip = true;
                    this.sizeTipTxt = this.i18ns.OSDeploy.OSDeploy_errorDiskSize;
                    return false;
                } else if (val.length > 8) {
                    this.isShowSizeTip = true;
                    this.sizeTipTxt = this.i18ns.OSDeploy.valid_maxSize_info;
                    return false;
                } else {
                    this.isShowSizeTip = false;
                    return true;
                }
            }
        },
        getInfo: function () {
            if (this.AutoPart) {
                return this.deployForm;
            } else {
                if (this.validateSize(this.deployForm.Partition[0].Size)) {
                    return this.deployForm;
                } else {
                    return undefined;
                }
            }

        }

    }
})