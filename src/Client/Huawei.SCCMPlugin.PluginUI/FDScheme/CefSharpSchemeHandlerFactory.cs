//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
using CefSharp;
using System;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.FDScheme
{
    /// <summary>
    /// ����CefSharp��Scheme����
    /// </summary>
    public class CefSharpSchemeHandlerFactory : ISchemeHandlerFactory
    {
        public const string SchemeName = "huawei";
        public const string SchemeNameTest = "test";

        public IResourceHandler Create(IBrowser browser, IFrame frame, string schemeName, IRequest request)
        {
            if (schemeName == SchemeName && request.Url.EndsWith("CefSharp.Core.xml", System.StringComparison.OrdinalIgnoreCase))
            {
                //Display the debug.log file in the browser
                return ResourceHandler.FromFilePath($"{AppDomain.CurrentDomain.BaseDirectory}\\CefSharp.Core.xml", ".xml");
            }
            return new CefSharpSchemeHandler();
        }
    }
}