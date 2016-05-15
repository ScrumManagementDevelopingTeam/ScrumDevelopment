using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace ScrumRESTfulAPI.Controllers
{
    public class HomeController : ApiController
    {
        public ActionResult Index()
        {
            return new EmptyResult();
        }
    }
}
