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
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace CommonUtil
{
    internal class OpenSSLApi
    {
        /// <summary>
        /// PKCs the s5 PBKD f2 hmac.
        /// </summary>
        /// <param name="pass">The pass.</param>
        /// <param name="passlen">The passlen.</param>
        /// <param name="salt">The salt.</param>
        /// <param name="saltlen">The saltlen.</param>
        /// <param name="iter">The iter.</param>
        /// <param name="digest">The digest.</param>
        /// <param name="keylen">The keylen.</param>
        /// <param name="outBytes">The out bytes.</param>
        /// <returns>System.Int32.</returns>
        [DllImport("libcrypto-1_1.dll", CallingConvention = CallingConvention.Cdecl)]
        public static extern int PKCS5_PBKDF2_HMAC(string pass, int passlen, byte[] salt, int saltlen, int iter, IntPtr digest, int keylen, byte[] outBytes);

        /// <summary>
        /// Evps the sha256.
        /// </summary>
        /// <returns>IntPtr.</returns>
        [DllImport("libcrypto-1_1.dll", CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr EVP_sha256();
    }
}
