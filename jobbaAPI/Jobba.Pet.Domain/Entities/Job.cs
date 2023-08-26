using JobbaAPI.Job.Domain.ValueObjects;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobbaAPI.Job.Domain.Entities
{
    public class JobInfo
    {
        private DateTime _created;
        private Company company;
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; private set; }
        public string JobTitle { get; set; } = string.Empty;

        public Company? Company { get => company; set => company = value; }
        public string Description { get; set; } = string.Empty;
        public DateTime PostDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public DateTime LastUpdate { get { return _created; } private set { _created = DateTime.UtcNow; } }

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
