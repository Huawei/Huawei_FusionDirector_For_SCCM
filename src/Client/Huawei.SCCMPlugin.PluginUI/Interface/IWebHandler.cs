//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using Huawei.SCCMPlugin.FusionDirector.PluginUI.FDScheme;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Interface
{
    public interface IWebHandler
    {
        FDBrowser FDBrowser { get; set; }

        /// <summary>
        /// <summary>
        /// 前端呼叫后端。
        /// 可以呼叫多次。
        /// 初始化，
        /// 提交数据。
        /// </summary>
        /// <param name="eventName">Name of the event.</param>
        /// <param name="eventData">The post data.</param>
        /// <returns>System.String.</returns>
        string Execute(string eventName, object eventData);
    }
}
