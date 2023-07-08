using Jobba.Pet.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JobsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class jobController : ControllerBase
    {
        private readonly ILogger<jobController> _logger;
        List<Job> jobs = new List<Job>()
            {
                new Job(new Guid("293df265-d342-41fc-a2f7-d01df826e9a6")) {Description="JobDescription 1", LastUpdate = DateTime.Now, PostDate = DateTime.Now, Title="Title 1"},
                new Job(new Guid("3283cb1b-67d1-4b7b-8ca5-7e60d83602e6")) {Description="JobDescription 2", LastUpdate = DateTime.Now, PostDate = DateTime.Now, Title="Title 2"},
                new Job(new Guid("ddfecbd9-d780-45a0-9500-5116368c4402")) {Description="JobDescription 3", LastUpdate = DateTime.Now, PostDate = DateTime.Now, Title="Title 3"},
                new Job(new Guid("ac3c7b0d-e327-40e0-9b97-e120a2a4f542")) {Description="JobDescription 4", LastUpdate = DateTime.Now, PostDate = DateTime.Now, Title="Title 4"},
                new Job(new Guid("b5db5913-51fb-4d1c-8045-78ae794b9fe6")) {Description="JobDescription 5", LastUpdate = DateTime.Now, PostDate = DateTime.Now, Title="Title 5"}
            };

        public jobController(ILogger<jobController> logger)
        {
            _logger = logger;
        }
        // GET: api/<JobController>
        [HttpGet]
        public IEnumerable<Job> Get()
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
        public Job? Get(Guid id)
        {
            return jobs.Where(p => p.Id == id).FirstOrDefault();

        }

        [HttpGet("title/{title}")]
        public IEnumerable<Job> GetTitle(string title)
        {
            return jobs.Where(p => p.Title.Contains(title));

        }
        [HttpGet("topsearches")]
        public IEnumerable<Job> GetTopSearches()
        {
            return jobs.OrderBy(p=>p.Rank).Take(5);
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
