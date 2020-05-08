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
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Huawei.SCCMPlugin.DAO
{
    public class CertHelper
    {
        public static void ImportCertByPath(string certFilePath)
        {

            var bytes = File.ReadAllBytes(certFilePath);
            var cert = new X509Certificate2(bytes);
            X509Store store;
            //如果颁发者是自己，那么就导入到根证书
            if (cert.Subject == cert.Issuer)
            {
                store = new X509Store(StoreName.Root, StoreLocation.LocalMachine);
            }
            //如果颁发者不是自己，那么就导入到中间证书
            else
            {
                store = new X509Store(StoreName.CertificateAuthority, StoreLocation.LocalMachine);
            }

            store.Open(OpenFlags.ReadWrite);
            store.Add(cert);
            store.Close();
        }

        /// <summary>
        /// 通过指纹卸载证书
        /// </summary>
        /// <param name="thumbprint">指纹</param>
        /// <param name="location">位置</param>
        public static void RemoveCert(string thumbprint, string location)
        {
            X509Store store = new X509Store();
            if (location == "Root")
            {
                store = new X509Store(StoreName.Root, StoreLocation.LocalMachine);
            }
            else
            {
                store = new X509Store(StoreName.CertificateAuthority, StoreLocation.LocalMachine);
            }
            store.Open(OpenFlags.ReadWrite | OpenFlags.IncludeArchived);

            // You could also use a more specific find type such as X509FindType.FindByThumbprint
            X509Certificate2Collection col = store.Certificates.Find(X509FindType.FindByThumbprint, thumbprint, false);

            foreach (var cert in col)
            {
                Console.Out.WriteLine(cert.SubjectName.Name);

                store.Remove(cert);
            }
            store.Close();
        }
    }
}
