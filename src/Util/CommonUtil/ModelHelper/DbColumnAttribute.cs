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
    /// 实体属性映射数据库表字段特性
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class DbColumnAttribute : Attribute
    {
        public DbColumnAttribute()
        {
        }
        public DbColumnAttribute(string columnName)
        {
            _columnName = columnName;
        }
        private string _columnName;
        public virtual string ColumnName { get { return _columnName; } set { _columnName = value; } }
    }
}
