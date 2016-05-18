using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ScrumRESTfulAPI.Models.Table;

namespace ScrumRESTfulAPI.Models.Context
{
    public class ProjectContext : DbContext
    {
        public DbSet<Project> Project { get; set; }
    }
}