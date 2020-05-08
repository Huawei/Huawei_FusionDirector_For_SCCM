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
using System.IO;
using System.Net;
using CefSharp;
using LogUtil;
using Cookie = CefSharp.Cookie;

namespace Huawei.SCCMPlugin.FusionDirector.PluginUI.FDScheme
{
    /// <summary>
    /// 实现对CefSharp请求资源处理
    /// </summary>
    internal class CefSharpSchemeHandler : IResourceHandler
    {

        private string mimeType;
        private MemoryStream stream;

        bool IResourceHandler.ProcessRequest(IRequest request, ICallback callback)
        {
            var uri = new Uri(request.Url);
            string fullPath = Path.Combine(System.AppDomain.CurrentDomain.SetupInformation.ApplicationBase, uri.Authority + uri.AbsolutePath);
            if (File.Exists(fullPath))
            {
                stream = new MemoryStream(File.ReadAllBytes(fullPath));
                var fileExtension = Path.GetExtension(uri.AbsolutePath);
                mimeType = ResourceHandler.GetMimeType(fileExtension);
                callback.Continue();
                return true;
            }
            else
            {
                HWLogger.DEFAULT.Error("error:can not find filename:" + Path.GetFullPath(fullPath));
                callback.Dispose();
                return false;
            }
        }

        void IResourceHandler.GetResponseHeaders(IResponse response, out long responseLength, out string redirectUrl)
        {
            responseLength = stream == null ? 0 : stream.Length;
            redirectUrl = null;

            response.StatusCode = (int)HttpStatusCode.OK;
            response.StatusText = "OK";
            response.MimeType = mimeType;
        }

        bool IResourceHandler.ReadResponse(Stream dataOut, out int bytesRead, ICallback callback)
        {
            //Dispose the callback as it's an unmanaged resource, we don't need it in this case
            callback.Dispose();

            if (stream == null)
            {
                bytesRead = 0;
                return false;
            }

            //Data out represents an underlying buffer (typically 32kb in size).
            var buffer = new byte[dataOut.Length];
            bytesRead = stream.Read(buffer, 0, buffer.Length);

            dataOut.Write(buffer, 0, buffer.Length);

            return bytesRead > 0;
        }

        bool IResourceHandler.CanGetCookie(Cookie cookie)
        {
            return true;
        }

        bool IResourceHandler.CanSetCookie(Cookie cookie)
        {
            return true;
        }

        void IResourceHandler.Cancel()
        {

        }

        #region IDisposable Support
        private bool disposedValue = false; // 要检测冗余调用

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: 释放托管状态(托管对象)。
                }

                // TODO: 释放未托管的资源(未托管的对象)并在以下内容中替代终结器。
                // TODO: 将大型字段设置为 null。

                disposedValue = true;
            }
        }

        // TODO: 仅当以上 Dispose(bool disposing) 拥有用于释放未托管资源的代码时才替代终结器。
        // ~CefSharpSchemeHandler() {
        //   // 请勿更改此代码。将清理代码放入以上 Dispose(bool disposing) 中。
        //   Dispose(false);
        // }

        // 添加此代码以正确实现可处置模式。
        public void Dispose()
        {
            // 请勿更改此代码。将清理代码放入以上 Dispose(bool disposing) 中。
            Dispose(true);
            // TODO: 如果在以上内容中替代了终结器，则取消注释以下行。
            // GC.SuppressFinalize(this);
        }
        #endregion

    }
}
