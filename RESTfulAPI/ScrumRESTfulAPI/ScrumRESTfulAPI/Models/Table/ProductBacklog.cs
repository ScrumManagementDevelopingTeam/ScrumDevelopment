using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ScrumRESTfulAPI.Models.Table
{
    public class ProductBacklog
    {
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        public string _id { get; set; }

        /// <summary>
        /// UserStory名称
        /// </summary>
        public string UserStoryTitle { get; set; }

        /// <summary>
        /// 优先级
        /// </summary>
        public int Rank { get; set; }

        /// <summary>
        /// Deadline
        /// </summary>
        public DateTime? Deadline { get; set; }

        /// <summary>
        /// UserStory
        /// </summary>
        public string UserStory { get; set; }

        /// <summary>
        /// 项目ID
        /// </summary>
        public string ProjectId { get; set; }
    }
}