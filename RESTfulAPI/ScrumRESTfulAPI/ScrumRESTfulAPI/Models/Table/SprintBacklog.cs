using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ScrumRESTfulAPI.Models.Table
{
    public class SprintBacklog
    {
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        public string _id { get; set; }


    }
}