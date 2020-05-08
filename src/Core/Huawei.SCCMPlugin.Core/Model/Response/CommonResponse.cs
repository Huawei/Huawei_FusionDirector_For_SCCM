//**************************************************************************  
//Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
//This program is free software; you can redistribute it and/or modify
//it under the terms of the MIT license.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//MIT license for more detail.
//*************************************************************************  
﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Huawei.SCCMPlugin.Core.Model.Response
{
    /// <summary>
    /// Class CommonResponse.
    /// </summary>
    public class CommonResponse
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CommonResponse"/> class.
        /// </summary>
        /// <param name="code">The code.</param>
        public CommonResponse(string code)
        {
            this.Code = code;
            this.Data = new List<Item>();
        }

        /// <summary>
        /// Gets or sets the code.
        /// </summary>
        /// <value>The code.</value>
        [JsonProperty("code")]
        public string Code { get; set; }

        /// <summary>
        /// Gets or sets the data.
        /// </summary>
        /// <value>The data.</value>
        [JsonProperty("data")]
        public List<Item> Data { get; set; }

        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        /// <value>The description.</value>
        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("headers")]

        public object Headers { get; set; }

        /// <summary>
        /// Gets or sets the ips.
        /// </summary>
        /// <value>The ip.</value>
        [JsonProperty("ips")]
        public List<string> Ips { get; set; }
    }

    /// <summary>
    /// Class Item.
    /// </summary>
    public class Item
    {
        /// <summary>
        /// Gets or sets the code.
        /// </summary>
        /// <value>The code.</value>
        [JsonProperty("code")]
        public string Code { get; set; }

        /// <summary>
        /// Gets or sets the ip.
        /// </summary>
        /// <value>The ip.</value>
        [JsonProperty("ip")]
        public string Ip { get; set; }

        /// <summary>
        /// Gets or sets the data.
        /// </summary>
        /// <value>The data.</value>
        [JsonProperty("data")]
        public object Data { get; set; }
    }
}
