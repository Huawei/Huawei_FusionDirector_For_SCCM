//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using Huawei.SCCMPlugin.FusionDirector.PluginUI.Attributes;
using Huawei.SCCMPlugin.FusionDirector.PluginUI.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Handlers
{

    /// <summary>
    /// 任务管理
    /// </summary>
    [CefURL("huawei/configuration/index.html")]
    [Bound("NetBound")]
    public class ConfugHandler : BaseHandler, IWebHandler
    {
    }
}
