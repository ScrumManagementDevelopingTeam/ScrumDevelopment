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
    public class ProductBacklogsController : ApiController
    {
        private ProductBacklogContext db = new ProductBacklogContext();

        // GET: api/ProductBacklogs
        public IQueryable<ProductBacklog> GetProductBacklog()
        {
            return db.ProductBacklog;
        }

        // GET: api/ProductBacklogs/5
        [ResponseType(typeof(ProductBacklog))]
        public IHttpActionResult GetProductBacklog(string id)
        {
            ProductBacklog productBacklog = db.ProductBacklog.Find(id);
            if (productBacklog == null)
            {
                return NotFound();
            }

            return Ok(productBacklog);
        }

        // PUT: api/ProductBacklogs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductBacklog(string id, ProductBacklog productBacklog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productBacklog._id)
            {
                return BadRequest();
            }

            db.Entry(productBacklog).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductBacklogExists(id))
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

        // POST: api/ProductBacklogs
        [ResponseType(typeof(ProductBacklog))]
        public IHttpActionResult PostProductBacklog(ProductBacklog productBacklog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductBacklog.Add(productBacklog);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProductBacklogExists(productBacklog._id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = productBacklog._id }, productBacklog);
        }

        // DELETE: api/ProductBacklogs/5
        [ResponseType(typeof(ProductBacklog))]
        public IHttpActionResult DeleteProductBacklog(string id)
        {
            ProductBacklog productBacklog = db.ProductBacklog.Find(id);
            if (productBacklog == null)
            {
                return NotFound();
            }

            db.ProductBacklog.Remove(productBacklog);
            db.SaveChanges();

            return Ok(productBacklog);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductBacklogExists(string id)
        {
            return db.ProductBacklog.Count(e => e._id == id) > 0;
        }
    }
}