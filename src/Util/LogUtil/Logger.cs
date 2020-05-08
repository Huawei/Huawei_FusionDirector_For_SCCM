//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using NLog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using NLog.Config;

namespace LogUtil
{
    /// <summary>
    /// 日志接口实现类
    /// </summary>
    class Logger : ILogger
    {


        private NLog.Logger log4 = null;
        /// <summary>
        /// NLOG 日志类。
        /// </summary>
        public NLog.Logger RawLog
        {
            get { return log4; }
        }
        /// <summary>
        /// 日志类构造方法
        /// </summary>
        /// <param name="logname">日志的名称,建议直接使用HWLogger类来写日志</param>
        public Logger(string logname)
        {
            //LogManager.Configuration =new NLog.Config.XmlLoggingConfiguration("FDNLog.config");此种方法会造成sccm崩溃
            log4 = LogManager.GetLogger(logname);
        }

        /// <summary>
        /// 将日志中密码隐藏。
        /// </summary>
        /// <param name="obj">日志正文</param>
        /// <returns></returns>
        private string EncryptPd(object obj)
        {
            if (obj == null) obj = string.Empty;
            string str = obj.ToString();
            Dictionary<string, Regex> regexes = new Dictionary<string, Regex>();
            regexes[@"password=********"] = new Regex(@"password=[\w.]+\b", RegexOptions.IgnoreCase);
            regexes[@"password=********&"] = new Regex(@"password=[\w.]+\&", RegexOptions.IgnoreCase);
            regexes[@"$1******** "] = new Regex(@"(mysql.exe.*-p)[\w]+ ", RegexOptions.IgnoreCase);
            regexes[@"$1********"] = new Regex(@"(mysql.exe.*-p)[\w]+\b", RegexOptions.IgnoreCase);

            foreach (KeyValuePair<string, Regex> keyValuePair in regexes)
            {
                str = keyValuePair.Value.Replace(str, keyValuePair.Key);
            }
            return str;

        }

        #region "log interface."
        /// <summary>
        /// 输出错误日志 Error 级别。
        /// </summary>
        /// <param name="msg"></param>
        public void Log(object message)
        {
            log4.Error(EncryptPd(message));
        }
        /// <summary>
        /// 输出错误日志 Error 级别。
        /// </summary>
        /// <param name="ex">错误类</param>
        public void Log(Exception e)
        {
            log4.Error(e);
        }
        /// <summary>
        /// 输出错误日志 Error 级别。
        /// </summary>>
        /// <param name="msg">错误消息体</param>
        /// <param name="ex">错误类</param>
        public void Log(object message, Exception e)
        {
            log4.Error(e, EncryptPd(message));
        }
        /// <summary>
        /// 输出错误日志 Debug 级别。
        /// </summary>>
        /// <param name="msg">错误消息体</param>
        public void Debug(object msg)
        {
            log4.Debug(EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Debug 级别。
        /// </summary>
        /// <param name="msg">错误消息体</param>
        /// <param name="ex">错误类</param>
        public void Debug(object msg, Exception ex)
        {
            log4.Debug(ex, EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Debug 级别。
        /// 支持string.format 的占位符方式.
        /// 如：DebugFormat("title:{0}",titleVar)
        /// </summary>
        /// <param name="msg">消息正文</param>
        /// <param name="args">带入参数,数组类型</param>
        public void DebugFormat(string msg, params object[] args)
        {
            log4.Debug(EncryptPd(string.Format(msg, args)));
        }
        /// <summary>
        /// 输出错误日志 Info 级别。
        /// </summary>>
        /// <param name="msg">错误消息体</param>
        public void Info(object msg)
        {
            log4.Info(EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Info 级别。
        /// </summary>
        /// <param name="msg">错误消息体</param>
        /// <param name="ex">错误类</param>
        public void Info(object msg, Exception ex)
        {
            log4.Info(ex, EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Info 级别。
        /// 支持string.format 的占位符方式.
        /// 如：InfoFormat("title:{0}",titleVar)
        /// </summary>
        /// <param name="msg">消息正文</param>
        /// <param name="args">带入参数,数组类型</param>
        public void InfoFormat(string msg, params object[] args)
        {
            log4.Info(EncryptPd(string.Format(msg, args)));
        }

        /// <summary>
        /// 输出错误日志 Warn 级别。
        /// </summary>>
        /// <param name="msg">错误消息体</param>
        public void Warn(object msg)
        {
            log4.Warn(EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Warn 级别。
        /// </summary>
        /// <param name="msg">错误消息体</param>
        /// <param name="ex">错误类</param>
        public void Warn(object msg, Exception ex)
        {
            log4.Warn(ex, EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Warn 级别。
        /// 支持string.format 的占位符方式.
        /// 如：InfoFormat("title:{0}",titleVar)
        /// </summary>
        /// <param name="msg">消息正文</param>
        /// <param name="args">带入参数,数组类型</param>
        public void WarnFormat(string msg, params object[] args)
        {
            log4.Warn(string.Format(msg, args));
        }

        /// <summary>
        /// 输出错误日志 Error 级别。
        /// </summary>>
        /// <param name="msg">错误消息体</param>
        public void Error(object msg)
        {
            log4.Error(EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Error 级别。
        /// </summary>
        /// <param name="msg">错误消息体</param>
        /// <param name="ex">错误类</param>
        public void Error(object msg, Exception ex)
        {
            log4.Error(ex, EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Error 级别。
        /// 支持string.format 的占位符方式.
        /// 如：ErrorFormat("title:{0}",titleVar)
        /// </summary>
        /// <param name="msg">消息正文</param>
        /// <param name="args">带入参数,数组类型</param>
        public void ErrorFormat(string msg, params object[] args)
        {
            log4.Error(EncryptPd(string.Format(msg, args)));
        }

        /// <summary>
        /// 输出错误日志 Fatal 级别。
        /// </summary>>
        /// <param name="msg">错误消息体</param>
        public void Fatal(object msg)
        {
            log4.Fatal(EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Fatal 级别。
        /// </summary>
        /// <param name="msg">错误消息体</param>
        /// <param name="ex">错误类</param>
        public void Fatal(object msg, Exception ex)
        {
            log4.Fatal(ex, EncryptPd(msg));
        }
        /// <summary>
        /// 输出错误日志 Fatal 级别。
        /// 支持string.format 的占位符方式.
        /// 如：FatalFormat("title:{0}",titleVar)
        /// </summary>
        /// <param name="msg">消息正文</param>
        /// <param name="args">带入参数,数组类型</param>
        public void FatalFormat(string msg, params object[] args)
        {
            log4.Fatal(EncryptPd(string.Format(msg, args)));
        }

        #endregion
    }
}
