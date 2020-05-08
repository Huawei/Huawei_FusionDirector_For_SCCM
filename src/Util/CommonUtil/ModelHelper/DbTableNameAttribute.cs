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

namespace CommonUtil.ModelHelper
{
    /// <summary>
    /// 数据库表名特性
    /// </summary>
    [AttributeUsage(AttributeTargets.Class)]
    public class DbTableNameAttribute : Attribute
    {
        public DbTableNameAttribute()
        {
        }

        public DbTableNameAttribute(string name)
        {
            _name = name;
        }
        private string _name; public virtual string Name { get { return _name; } set { _name = value; } }
    }
}
