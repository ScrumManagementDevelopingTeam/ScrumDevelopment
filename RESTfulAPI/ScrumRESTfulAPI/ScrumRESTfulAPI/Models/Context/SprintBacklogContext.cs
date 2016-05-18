using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ScrumRESTfulAPI.Models.Table;

namespace ScrumRESTfulAPI.Models.Context
{
    public class SprintBacklogContext : DbContext
    {
        public DbSet<SprintBacklog> SprintBacklog { get; set; }
    }
}