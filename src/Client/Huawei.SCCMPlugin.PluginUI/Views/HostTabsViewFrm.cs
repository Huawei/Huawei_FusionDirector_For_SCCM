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
using System.Diagnostics;
using System.Linq;
using System.Windows.Forms;
using CefSharp;
using Huawei.SCCMPlugin.FusionDirector.PluginUI.Interface;
using Huawei.SCCMPlugin.FusionDirector.PluginUI.Attributes;
using Huawei.SCCMPlugin.FusionDirector.PluginUI.Helper;
using CefSharpSchemeHandlerFactory = Huawei.SCCMPlugin.FusionDirector.PluginUI.FDScheme.CefSharpSchemeHandlerFactory;
using FDBrowser = Huawei.SCCMPlugin.FusionDirector.PluginUI.FDScheme.FDBrowser;
using Huawei.SCCMPlugin.FusionDirector.PluginUI.FDScheme;
using Huawei.SCCMPlugin.DAO;
using System.IO;
using System.Security.Cryptography.X509Certificates;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Views
{
    public partial class HostTabsViewFrm : Form
    {
        private static readonly string RunPath = AppDomain.CurrentDomain.BaseDirectory;
        FDBrowser FDBrowser;
        public string Url { get; set; }
        public HostTabsViewFrm(string url)
        {
            try
            {
                InitializeComponent();
                //处理未捕捉异常
                AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
                Application.ThreadException += Application_ThreadException;
                ImportCert();
                //初始化
                this.Url = url;
                CefInstanse.Init(this);
                Application.ApplicationExit += Application_ApplicationExit;
            }
            catch (NullReferenceException se)
            {
                LogUtil.HWLogger.UI.Error(se);
            }
            catch (Exception se)
            {
                LogUtil.HWLogger.UI.Error("Error occurred when init HostTabsViewFrm: ", se);
            }
        }

        public void ImportCert()
        {
            try
            {
                X509Store store1 = new X509Store(StoreName.Root, StoreLocation.LocalMachine);
                store1.Open(OpenFlags.MaxAllowed);
                X509Certificate2Collection certs1 = store1.Certificates.Find(X509FindType.FindBySubjectName, "Huawei Equipment CA", false);
                if (certs1.Count == 0 || certs1[0].NotAfter < DateTime.Now)
                {
                    var path = Path.GetFullPath(RunPath + "\\Certs\\HuaweiEquipmentRootCA.crt");
                    LogUtil.HWLogger.UI.Info("Certs path:" + path);
                    CertHelper.ImportCertByPath(path);
                    LogUtil.HWLogger.UI.Info("Import HuaweiEquipmentRootCA.crt");
                }
                X509Store store2 = new X509Store(StoreName.CertificateAuthority, StoreLocation.LocalMachine);
                store2.Open(OpenFlags.MaxAllowed);
                X509Certificate2Collection certs2 = store2.Certificates.Find(X509FindType.FindBySubjectName, "Huawei IT Product CA", false);
                if (certs2.Count == 0 || certs2[0].NotAfter < DateTime.Now)
                {
                    var path = Path.GetFullPath(RunPath + "\\Certs\\HuaweiITProductCA.crt");
                    LogUtil.HWLogger.UI.Info("Certs path:" + path);
                    CertHelper.ImportCertByPath(path);
                    LogUtil.HWLogger.UI.Info("Import HuaweiITProductCA.crt");
                }
            }
            catch (Exception ex)
            {
                LogUtil.HWLogger.UI.Error("Error ImportCert: ", ex);
            }
        }
        private void HostTabsViewFrm_Load(object sender, EventArgs e)
        {
            try
            {
                JumpToPage(Url);
            }
            catch (Exception se)
            {
                LogUtil.HWLogger.UI.Error("Error occurred when load HostTabsViewFrm: ", se);
            }
        }

        private void Application_ApplicationExit(object sender, EventArgs e)
        {
            try
            {
                LogUtil.HWLogger.UI.Info("Exit application...");
                CefInstanse.Exit();
            }
            catch (Exception se)
            {
                LogUtil.HWLogger.UI.Error(se);
            }
        }

        /// <summary>
        /// Jumps to page.
        /// </summary>
        /// <param name="url">The URL.</param>
        public void JumpToPage(string url)
        {
            try
            {
                if (!Cef.IsInitialized) return;

                LogUtil.HWLogger.UI.InfoFormat("beginning jump to [{0}]...", url);
                var handlerDict = HandlerHelper.HandlerDict;
                if (handlerDict!=null && handlerDict.ContainsKey(url.ToUpper()))
                {
                    var v = handlerDict[url.ToUpper()];
                    FDBrowser = new FDBrowser(url)
                    {
                        MenuHandler = new CefSharpContextMenuHandler(),
                        OnConsoleMessage = OnConsoleMessage,
                        OnLoadError = OnLoadError,
                        OnLoadFinish = OnLoadFinish
                    };

                    //var bound = v.GetType().GetCustomAttributes(typeof(BoundAttribute), false).FirstOrDefault() as BoundAttribute;
                    //FDBrowser.RegisterJsObject(bound.BoundName, Activator.CreateInstance(v.GetType()));
                    //FDBrowser.RegisterJsObject("NetBound", v);
                    if (v != null)
                    {
                        
                        FDBrowser.RegisterAsyncJsObject("NetBound", v);
                        v.FDBrowser = FDBrowser;
                        this.pnlContent.Controls.Clear();
                        this.pnlContent.Controls.Add(FDBrowser);
                    }
                }
                else
                {
                    MessageBox.Show(@"can not found handler:" + url);
                }
            }
            catch (Exception ex)
            {
                LogUtil.HWLogger.UI.Error("Error occurred when load url: ", ex);
            }
        }

        /// <summary>
        /// Called when [load finish].
        /// </summary>
        public void OnLoadFinish()
        {
            LogUtil.HWLogger.UI.InfoFormat("url load finish!");
        }

        /// <summary>
        /// Called when [load error].
        /// </summary>
        /// <param name="failedUrl">The failed URL.</param>
        /// <param name="errorCode">The error code.</param>
        /// <param name="errorText">The error text.</param>
        public void OnLoadError(string failedUrl, string errorCode, string errorText)
        {
            LogUtil.HWLogger.UI.Error($"LoadError：failedUrl:{failedUrl} errorCode:{errorCode} {errorText}");
        }

        /// <summary>
        /// Called when [console message].
        /// </summary>
        /// <param name="source">The source.</param>
        /// <param name="line">The line.</param>
        /// <param name="message">The message.</param>
        public void OnConsoleMessage(string source, int line, string message)
        {
            //Debug.WriteLine($"'Source:{source} line:{line} {message}'");
        }

        #region 未捕捉异常处理
        private void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            LogUtil.HWLogger.UI.Error("CurrentDomain_UnhandledException", (Exception)e.ExceptionObject);
        }

        private void Application_ThreadException(object sender, System.Threading.ThreadExceptionEventArgs e)
        {
            LogUtil.HWLogger.UI.Error($"Application.ThreadException. Source:{e.Exception.Source}", e.Exception);
        }
        #endregion  
    }
}
