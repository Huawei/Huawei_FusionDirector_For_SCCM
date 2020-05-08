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

namespace CommonUtil
{
    public class SingletonProvider<T> where T : new()
    {
        private SingletonProvider() { }
        private static readonly object SyncObject = new object();
        private static T _singleton;

        public static T Instance
        {
            get
            {
                if (null == _singleton)
                {
                    lock (SyncObject)
                    {
                        _singleton = new T();
                    }
                }
                return _singleton;
            }
        }

    }
}
