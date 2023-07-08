using JobbaAPI.Search.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Jobba.API.Search.Infrastructure.Data
{
    public class SearchDBContext :DbContext
    {
        public DbSet<SearchString> SearchStrings { get; set; }
        public SearchDBContext(DbContextOptions<SearchDBContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SearchString>().Property(p => p.Id).IsRequired();
            modelBuilder.Entity<SearchString>().Property(p => p.Keyword).IsRequired();
            base.OnModelCreating(modelBuilder);
        }

        //public override int SaveChanges()
        //{
        //    //ChangeTracker.DetectChanges();

        //    //updateUpdatedProperty<SearchString>();

        //    return base.SaveChanges();
        //}
        //private void updateUpdatedProperty<T>() where T : class
        //{
        //    var modifiedSourceInfo =
        //        ChangeTracker.Entries<T>()
        //            .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);

        //    foreach (var entry in modifiedSourceInfo)
        //    {
        //        entry.Property("UpdatedTimestamp").CurrentValue = DateTime.UtcNow;
        //    }
        //}
    }
}
