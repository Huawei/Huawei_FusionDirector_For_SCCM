Vue.component('VMware', {
    template: '<div><div class="dashBorder"></div><span class="infoTitle">{{i18ns.OSDeploy.deploy_installInfo}}</span><el-row><el-form label-position="left" :model="deployForm" :rules="rules" ref="deployForm" label-width="250px" ><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.OSDeploy_rootPasswordColon1" prop="RootPwd"><el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.RootPwd" ></el-input></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_passwordConfirmedAgain" prop="againPwd"><el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.againPwd" ></el-input></el-form-item></el-col></el-form></el-row></div></div>',
    data: function () {
        return {
            i18ns: [],
            deployForm: {
                Partition: [],
                RootPwd: "",
                againPwd: ''
            },
            // againPwd:'',
            rules: {
                RootPwd: [{
                    required: true,
                    validator: function (rule, value, callback) {
                        if (value) {
                            var reg1 = /[A-Za-z]/;
                            var reg2 = /[0-9]/;
                            var reg3 = /[\ \`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\|\[\{\}\]\;\:\'\"\,\<\.\>\/\?]+/;
                            if (reg1.test(value) && reg2.test(value) && reg3.test(value)&&getBytes(value)>=7&&getBytes(value)<=40) {
                                return callback();
                            } else {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_deployVmVal));
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
        }
    },
    props: {
        FDIp: String
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {}
})