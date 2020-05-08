//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Entitys
{
    /// <summary>
    /// 删除任务API参数对象，用于升级任务、模板任务
    /// </summary>
    public class ParamOfDeleteTask
    {
        [JsonProperty("taskId")]
        public int TaskId { get; set; }
    }

    /// <summary>
    /// 分页参数对象，用于只有页码和页大小两个参数的UI
    /// </summary>
    public class ParamOnlyPagingInfo
    {
        [JsonProperty("pageNo")]
        public int PageNo { get; set; }

        [JsonProperty("pageSize")]
        public int PageSize { get; set; }
    }

    /// <summary>
    /// 分页参数对象，用于查询FD列表
    /// </summary>
    public class ParamPagingOfQueryFD
    {
        [JsonProperty("pageNo")]
        public int PageNo { get; set; }

        [JsonProperty("pageSize")]
        public int PageSize { get; set; }

        [JsonProperty("hostIp")]
        public string HostIp { get; set; }
    }
    
}
