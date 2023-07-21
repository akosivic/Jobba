
using Microsoft.AspNetCore.Mvc;
using Jobba.Job.Domain.Entities;
using Jobba.Job.Infrastructure.SeedWork;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Jobba.Job.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class jobController : ControllerBase
    {
        private readonly ILogger<jobController> _logger;
        List<JobInfo> jobs = new()
            {
                new JobInfo(new Guid("293df265-d342-41fc-a2f7-d01df826e9a6")) {Description="JobDescription 1",  PostDate = DateTime.Now, JobTitle="Title 1"},
                new JobInfo(new Guid("3283cb1b-67d1-4b7b-8ca5-7e60d83602e6")) {Description="JobDescription 2",  PostDate = DateTime.Now, JobTitle="Title 2"},
                new JobInfo(new Guid("ddfecbd9-d780-45a0-9500-5116368c4402")) {Description="JobDescription 3",  PostDate = DateTime.Now, JobTitle="Title 3"},
                new JobInfo(new Guid("ac3c7b0d-e327-40e0-9b97-e120a2a4f542")) {Description="JobDescription 4", PostDate = DateTime.Now, JobTitle="Title 4"},
                new JobInfo(new Guid("b5db5913-51fb-4d1c-8045-78ae794b9fe6")) {Description="JobDescription 5", PostDate = DateTime.Now, JobTitle="Title 5"}
            };

        public jobController(ILogger<jobController> logger, IRepository<JobInfo> repository)
        {
            _logger = logger;
        }
        // GET: api/<JobController>
        [HttpGet]
        public IEnumerable<JobInfo> Get()
        {
            try
            {
                return jobs;
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
            return jobs.Where(p => p.Id == id).FirstOrDefault();
        }

        [HttpGet("company/{company}/{jobtitle}")]
        public IEnumerable<JobInfo> GetTitle(string title)
        {
            return jobs.Where(p => p.JobTitle.Contains(title));
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
