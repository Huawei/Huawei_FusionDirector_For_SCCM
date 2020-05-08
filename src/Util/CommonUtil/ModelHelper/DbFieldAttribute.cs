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
    /// 是否映射到数据库特性
    /// </summary>
    [AttributeUsage(AttributeTargets.Property)]
    public class DbFieldAttribute : Attribute
    {
        public DbFieldAttribute()
        {
        }
        public DbFieldAttribute(bool isDbField)
        {
            _isDbField = isDbField;
        }
        private bool _isDbField;
        public virtual bool IsDbField { get { return _isDbField; } set { _isDbField = value; } }
    }
}
