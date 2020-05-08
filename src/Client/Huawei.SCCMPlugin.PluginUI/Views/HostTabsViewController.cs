//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using Microsoft.ConfigurationManagement.AdminConsole.Schema;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Views
{
    public class HostTabsViewController : ViewBase
    {
        HostTabsViewFrm _frm = null;
        public HostTabsViewController() : base()
        {

        }
        public override void EndInit()
        {
            base.EndInit();
            string meanu = GetMenuIndexNodeVal(base.RootNodeProviderConfiguration.ConsoleRootObject.ViewAssemblyDescription[0]);
            LogUtil.HWLogger.UI.Info(meanu);
            _frm = new HostTabsViewFrm(meanu);
            base.InitByForm(_frm);
        }
        private string GetMenuIndexNodeVal(ViewAssemblyDescription viewAssemblyDescription)
        {
            string retVal = "";
            try
            {
                XmlElement rootNode = viewAssemblyDescription.CustomData;
                if (rootNode != null)
                {
                    retVal = rootNode.InnerText;
                }
            }
            catch (Exception se)
            {
                LogUtil.HWLogger.UI.Error(se);
                throw;
            }
            return retVal;
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
            if (!_frm.IsDisposed) _frm.Close();
        }
    }
}
