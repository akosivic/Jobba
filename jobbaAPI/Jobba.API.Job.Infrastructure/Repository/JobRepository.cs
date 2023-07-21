using Jobba.Job.Infrastructure.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Jobba.Job.Domain.Entities;

namespace Jobba.Job.Infrastructure.Repository
{
    public class JobRepository : IRepository<JobInfo>
    {
        public Task<List<JobInfo>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task PostAsync(JobInfo entity)
        {
            throw new NotImplementedException();
        }
    }
}
