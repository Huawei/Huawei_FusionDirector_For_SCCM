//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using Huawei.SCCMPlugin.FusionDirector.PluginUI.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Helper
{
    public sealed class DictHelper
    {
        /// <summary>
        /// 获取字典指定key的值
        /// </summary>
        /// <param name="dic">字典</param>
        /// <param name="key">指定key</param>
        /// <returns></returns>
        public static string GetDicValue(Dictionary<string, object> dic, string key)
        {
            if (dic.ContainsKey(key))//回调函数
            {
                return dic[key] as string;
            }
            return "";
        }

        /// <summary>
        /// 获取字典指定key的值
        /// </summary>
        /// <typeparam name="T">泛型参数</typeparam>
        /// <param name="dic">字典</param>
        /// <param name="key">指定key</param>
        /// <returns></returns>
        public static T GetDicValue<T>(Dictionary<string, object> dic, string key)
        {
            if (dic.ContainsKey(key))//回调函数
            {
                return CommonUtil.CoreUtil.GetObjTranNull<T>(dic[key]);
            }
            return default(T);
        }
    }
}
