//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using System;
using System.IO;

namespace LogUtil
{
    /// <summary>
    /// 日志管理类。
    /// </summary>
    public static class HWLogger
    {
        /// <summary>
        /// 缺省日志 输出: Huawei.SCCMPlugin.log
        /// </summary>
        public static ILogger DEFAULT = new Logger("DEFAULT_LOG");
        /// <summary>
        /// UI层日志 输出: Huawei.UI.log
        /// </summary>
        public static ILogger UI = new Logger("UI_LOG");
        /// <summary>
        /// 业务类日志 输出：Huawei.API.log
        /// </summary>
        public static ILogger API = new Logger("API_LOG");
        /// <summary>
        /// 系统更新或者升级日志，目前暂时没有使用，保留属性 输出：Huawei.updater.log 
        /// </summary>
        public static ILogger UPDATER = new Logger("UPDATER_LOG");  
    }
}
