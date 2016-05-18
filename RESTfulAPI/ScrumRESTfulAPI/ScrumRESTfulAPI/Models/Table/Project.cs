using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ScrumRESTfulAPI.Models.Table
{
    public class Project
    {
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        public string _id { get; set; }

        /// <summary>
        /// 项目名称
        /// </summary>
        public string Name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public string CreateTime { get; set; }

        /// <summary>
        /// 交付日期
        /// </summary>
        public string ExpiredDeliverDate { get; set; }
    }
}