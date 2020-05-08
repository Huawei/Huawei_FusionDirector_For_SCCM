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

namespace CommonUtil.ModelHelper
{
    /// <summary>
    /// 根据实体上的DbTableNameAttribute获取数据库表名
    /// </summary>
    public static class TableConvention
    {

        public static string Resolve(Type t)
        {
            string _tablename = "";
            DbTableNameAttribute tableName;
            var name = t.Name;
            foreach (Attribute attr in t.GetCustomAttributes(true))
            {
                tableName = attr as DbTableNameAttribute;
                if (tableName != null)
                    _tablename = tableName.Name;
            }
            return _tablename;
        }

        public static string Resolve(object o)
        {
            return Resolve(o.GetType());
        }
    }
}
