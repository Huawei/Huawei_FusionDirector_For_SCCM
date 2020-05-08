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
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Attributes
{
    /// <summary>
    /// 定义CefSharp Browser将打开的URL
    /// </summary>
  [AttributeUsage(AttributeTargets.All)]
  public sealed class CefURLAttribute : Attribute
  {
    private readonly string _url;

        /// <summary>
        /// SCCM Plugin UI Url
        /// </summary>
    public string URL
    {
      get { return _url; }
    }

        /// <summary>
        /// 构造方法
        /// </summary>
        /// <param name="url">SCCM Plugin UI Url</param>
    public CefURLAttribute(string url)
    {
      _url = url;
    }
  }
}
