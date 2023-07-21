using Jobba.Job.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jobba.Job.Infrastructure.Data
{
    public class JobDBContext : DbContext
    {
        public JobDBContext(DbContextOptions<JobDBContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobInfo>().Property(p => p.Id).IsRequired();
            modelBuilder.Entity<JobInfo>().Property(p => p.JobTitle).IsRequired();
            modelBuilder.Entity<JobInfo>().Property(p => p.PostDate).IsRequired();
            base.OnModelCreating(modelBuilder);
        }
    }
}
