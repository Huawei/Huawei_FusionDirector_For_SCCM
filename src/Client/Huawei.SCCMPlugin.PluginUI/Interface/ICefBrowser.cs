//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.Interface
{
    interface ICefBrowser
    {
        //bool SetAddress(string url);

        void ExecuteScript(string function, object data);

        void ExecuteScript(string jsCode);

        void RegisterJsObject<T>(string boundName) where T : new();
      
    }
}
