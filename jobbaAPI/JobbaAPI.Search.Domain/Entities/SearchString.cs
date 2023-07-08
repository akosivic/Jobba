using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobbaAPI.Search.Domain.Entities
{
    public class SearchString
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Keyword { get; private set; } = string.Empty;
        public double SearchCount { get; private set; }

        public SearchString(string keyword) { 
            Keyword = keyword;
            SearchCount = 1;
        }

        public void Increment()
        {
            SearchCount = ++SearchCount;
        }

    }
}
