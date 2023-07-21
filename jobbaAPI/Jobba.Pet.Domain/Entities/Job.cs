using Jobba.Job.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jobba.Job.Domain.Entities
{
    public class JobInfo
    {
       private DateTime _created;
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; private set; }
        public string? JobTitle { get; set; }
        public Company? Company { get => company; set => company = value; }
        public string? Description { get; set; }
        public DateTime PostDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public DateTime LastUpdate { get { return _created; } private set { _created = DateTime.UtcNow; } }

        private Company company;

        public JobInfo()
        {
            Id = Guid.NewGuid();
            Company = new Company();
        }
        public JobInfo(Guid id)
        {
            Id = id;
            Company = new Company();
        }

    }
}
