using Jobba.Job.Infrastructure.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JobbaAPI.Job.Domain.Entities;
using JobbaAPI.Job.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace JobbaAPI.Job.Infrastructure.Repository
{
    public class JobRepository : IRepository<JobInfo>
    {
        private readonly JobDBContext _jobDbContext;
        public JobRepository(JobDBContext jobDbContext)
        {
            this._jobDbContext = jobDbContext;
        }
        public async Task<List<JobInfo>> GetAsync( )
        {
            return await this._jobDbContext.JobInfos.Select(p => p).ToListAsync();
        }

        public Task PostAsync(JobInfo entity)
        {
            throw new NotImplementedException();
        }
    }
}
