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
    public class TeamsController : ApiController
    {
        private TeamContext db = new TeamContext();

        // GET: api/Teams
        public IQueryable<Team> GetTeam()
        {
            return db.Team;
        }

        // GET: api/Teams/5
        [ResponseType(typeof(Team))]
        public IHttpActionResult GetTeam(string id)
        {
            Team team = db.Team.Find(id);
            if (team == null)
            {
                return NotFound();
            }

            return Ok(team);
        }

        // PUT: api/Teams/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTeam(string id, Team team)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != team._id)
            {
                return BadRequest();
            }

            db.Entry(team).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
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

        // POST: api/Teams
        [ResponseType(typeof(Team))]
        public IHttpActionResult PostTeam(Team team)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Team.Add(team);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (TeamExists(team._id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = team._id }, team);
        }

        // DELETE: api/Teams/5
        [ResponseType(typeof(Team))]
        public IHttpActionResult DeleteTeam(string id)
        {
            Team team = db.Team.Find(id);
            if (team == null)
            {
                return NotFound();
            }

            db.Team.Remove(team);
            db.SaveChanges();

            return Ok(team);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TeamExists(string id)
        {
            return db.Team.Count(e => e._id == id) > 0;
        }
    }
}