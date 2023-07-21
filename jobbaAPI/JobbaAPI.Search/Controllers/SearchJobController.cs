using Jobba.API.Search.Infrastructure.Data;
using Jobba.API.Search.Infrastructure.Repository;
using Jobba.API.Search.Infrastructure.SeedWork;
using JobbaAPI.Search.API.DTO;
using JobbaAPI.Search.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Jobba.API.Search.Controllers
{
    [ApiController]
    [Route("api/search")]
    public class SearchJobController : ControllerBase
    {

        private readonly ILogger<SearchJobController> _logger;
        private readonly IRepository<SearchString> _repository;

        public SearchJobController(ILogger<SearchJobController> logger, IRepository<SearchString> repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet("topresults")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _repository.GetAsync();
                var returvalue = results.ToDTO();
                return Ok(returvalue);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddResults([FromQuery] string keyword)
        {
            try
            {
                SearchString searchkey = new SearchString(keyword);
                await _repository.PostAsync(searchkey);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}