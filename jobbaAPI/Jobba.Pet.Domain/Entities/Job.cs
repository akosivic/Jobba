using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jobba.Pet.Domain.Entities
{
    public class Job
    {
        public Guid Id { get; private set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime PostDate { get; set; }
        public DateTime LastUpdate { get; set; }

        public int Rank { get; private set; }

        public Job()
        {
            Id = Guid.NewGuid();
            Rank = new Random().Next();
        }
        public Job(Guid id)
        {
            Id = id;
            Rank = new Random().Next();
        }

    }
}
