
using Microsoft.AspNetCore.Mvc;
using JobbaAPI.Job.Domain.Entities;
using Jobba.Job.Infrastructure.SeedWork;
using System.Collections.Generic;
using Jobba.Job.API.DTO;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jobba.Job.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class jobController : ControllerBase
    {
        private readonly ILogger<jobController> _logger;
        private readonly IRepository<JobInfo> _repository;

        public jobController(ILogger<jobController> logger, IRepository<JobInfo> repository)
        {
            _logger = logger;
            _repository = repository;
        }
        // GET: api/<JobController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _repository.GetAsync();
                var returvalue = results.ToDTO();
                return Ok(returvalue);
            }
            catch (Exception e)
            {

                throw;
            }

        }

        // GET api/<JobController>/5
        [HttpGet("{id}")]
        public JobInfo? Get(Guid id)
        {
            throw new NotImplementedException();
            //return jobs.Where(p => p.Id == id).FirstOrDefault();
        }

        [HttpGet("company/{company}/{jobtitle}")]
        public IEnumerable<JobInfo> GetTitle(string title)
        {
            throw new NotImplementedException();
            //return jobs.Where(p => p.JobTitle.Contains(title));
        }

        // POST api/<JobController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<JobController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JobController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
