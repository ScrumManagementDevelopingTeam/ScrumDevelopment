using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ScrumRESTfulAPI.Models.Table
{
    /// <summary>
    /// 用户表（以微信登陆名作为主键）
    /// </summary>
    public class User
    {
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        public string _id { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// 电话
        /// </summary>
        public string Phone { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        public string Avatar { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        public string Role { get; set; }

        /// <summary>
        /// 电子邮箱
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// 项目组Id
        /// </summary>
        public string TeamId { get; set; }

        /// <summary>
        /// 项目组名称
        /// </summary>
        public string TeamName { get; set; }
    }
}