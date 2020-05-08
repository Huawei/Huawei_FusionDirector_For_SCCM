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
using System.Data.Entity;
using System.Linq;
using System.Text;
using Huawei.SCCMPlugin.Models;
using SQLite.CodeFirst;

namespace Huawei.SCCMPlugin.DAO
{
    public class SqliteDbContext : DbContext
    {
        public SqliteDbContext()
       : base("DefaultConnection") { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var sqliteConnectionInitializer = new SqliteCreateDatabaseIfNotExists<SqliteDbContext>(modelBuilder);
            Database.SetInitializer(sqliteConnectionInitializer);
        }

        #region DbSet对象 
        public DbSet<CodeFirstTestModel> CodeFirstTestModels { get; set; }

        public DbSet<HWESightHost> HWESightHosts { get; set; }

        #endregion

    }
}
