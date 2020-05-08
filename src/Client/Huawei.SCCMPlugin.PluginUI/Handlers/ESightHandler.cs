//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using HHuawei.SCCMPlugin.FusionDirector.PluginUIInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Huawei.SCCM.WebApp.Plugin;
using Huawei.SCCMPlugin.FusionDirector.PluginUI.Attributes;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Handlers
{
  [CefURL("test/test.html")]
  public class ESightHandler : IWebHandler
  {
    /*
     * 1. Init Page.
     * 2. Get Ajax, 获得一些下拉数据。
     * 3. 提交。
     * 3.1 添加 删除 修改。（拿数据）
     */
    public string JavascriptEventArrived(CefBrowser cefBrowser, string eventName, string postData)
    {
      //init
      throw new NotImplementedException();
    }
  }
}
