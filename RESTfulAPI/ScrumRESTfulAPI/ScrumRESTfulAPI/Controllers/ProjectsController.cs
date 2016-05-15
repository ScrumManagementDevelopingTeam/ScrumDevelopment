using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ScrumRESTfulAPI.Models.Context;
using ScrumRESTfulAPI.Models.Table;

namespace ScrumRESTfulAPI.Controllers
{
    public class ProjectsController : ApiController
    {
        private ProjectContext db = new ProjectContext();

        // GET: api/Projects
        public IQueryable<Project> GetProject()
        {
            return db.Project;
        }

        // GET: api/Projects/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult GetProject(string id)
        {
            Project project = db.Project.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

        // PUT: api/Projects/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProject(string id, Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != project._id)
            {
                return BadRequest();
            }

            db.Entry(project).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Projects
        [ResponseType(typeof(Project))]
        public IHttpActionResult PostProject(Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Project.Add(project);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProjectExists(project._id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = project._id }, project);
        }

        // DELETE: api/Projects/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult DeleteProject(string id)
        {
            Project project = db.Project.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            db.Project.Remove(project);
            db.SaveChanges();

            return Ok(project);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProjectExists(string id)
        {
            return db.Project.Count(e => e._id == id) > 0;
        }
    }
}