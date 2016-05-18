using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ScrumRESTfulAPI.Models.Table
{
    /// <summary>
    /// 项目组
    /// </summary>
    public class Team
    {
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        public string _id { get; set; }

        /// <summary>
        /// 团队名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 团队描述
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// 项目ID
        /// </summary>
        public string ProjectId { get; set; }

        /// <summary>
        /// 项目名称
        /// </summary>
        public string ProjectName { get; set; }
    }
}