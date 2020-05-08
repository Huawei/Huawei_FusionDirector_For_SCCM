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

namespace Huawei.SCCMPlugin.Core.Exceptions
{
    /// <summary>
    /// 自定义错误，基类Exception
    /// </summary>
    [Serializable]
    public class BaseException : ApplicationException
    {
        /// <summary>
        /// 错误类构造方法
        /// </summary>
        /// <param name="code">错误码</param>
        /// <param name="message">正文</param>
        public BaseException(string code,string message) : base(message)
        {
            Code = code;
            Message = message;
        }
        
        /// <summary>
        /// 错误码
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 错误消息
        /// </summary>
        public new string Message { get; set; }
    }

   
}
