using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobbaAPI.Job.Domain.ValueObjects
{
    public class Company
    {
        [AllowNull]
        public string CompanyName { get; set;}
    }
}
