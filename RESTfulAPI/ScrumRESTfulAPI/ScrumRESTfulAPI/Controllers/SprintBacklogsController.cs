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
    public class SprintBacklogsController : ApiController
    {
        private SprintBacklogContext db = new SprintBacklogContext();

        // GET: api/SprintBacklogs
        public IQueryable<SprintBacklog> GetSprintBacklog()
        {
            return db.SprintBacklog;
        }

        // GET: api/SprintBacklogs/5
        [ResponseType(typeof(SprintBacklog))]
        public IHttpActionResult GetSprintBacklog(string id)
        {
            SprintBacklog sprintBacklog = db.SprintBacklog.Find(id);
            if (sprintBacklog == null)
            {
                return NotFound();
            }

            return Ok(sprintBacklog);
        }

        // PUT: api/SprintBacklogs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSprintBacklog(string id, SprintBacklog sprintBacklog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sprintBacklog._id)
            {
                return BadRequest();
            }

            db.Entry(sprintBacklog).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SprintBacklogExists(id))
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

        // POST: api/SprintBacklogs
        [ResponseType(typeof(SprintBacklog))]
        public IHttpActionResult PostSprintBacklog(SprintBacklog sprintBacklog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SprintBacklog.Add(sprintBacklog);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (SprintBacklogExists(sprintBacklog._id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = sprintBacklog._id }, sprintBacklog);
        }

        // DELETE: api/SprintBacklogs/5
        [ResponseType(typeof(SprintBacklog))]
        public IHttpActionResult DeleteSprintBacklog(string id)
        {
            SprintBacklog sprintBacklog = db.SprintBacklog.Find(id);
            if (sprintBacklog == null)
            {
                return NotFound();
            }

            db.SprintBacklog.Remove(sprintBacklog);
            db.SaveChanges();

            return Ok(sprintBacklog);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SprintBacklogExists(string id)
        {
            return db.SprintBacklog.Count(e => e._id == id) > 0;
        }
    }
}