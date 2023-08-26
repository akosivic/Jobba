using JobbaAPI.Job.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage;

namespace JobbaAPI.Job.Infrastructure.Data
{
    public class JobDBContext : DbContext
    {
        public DbSet<JobInfo> JobInfos { get; set; }
        public JobDBContext(DbContextOptions<JobDBContext> options) : base(options)
        {
            Database.EnsureCreated();
            var s = Database.GenerateCreateScript();
            RelationalDatabaseCreator databaseCreator =
            (RelationalDatabaseCreator)Database.GetService<IDatabaseCreator>();
            databaseCreator.CreateTables();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new JobEntityTypeConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }

    public class JobEntityTypeConfiguration : IEntityTypeConfiguration<JobInfo> 
    {
        public void Configure(EntityTypeBuilder<JobInfo> jobInfoConfiguration)
        {
            jobInfoConfiguration.Property(p=>p.Id).IsRequired();
            jobInfoConfiguration.Property(p=> p.JobTitle).IsRequired();
            jobInfoConfiguration.Property(p=>p.PostDate).IsRequired();
            jobInfoConfiguration.OwnsOne(o => o.Company);
        }
    }

}
