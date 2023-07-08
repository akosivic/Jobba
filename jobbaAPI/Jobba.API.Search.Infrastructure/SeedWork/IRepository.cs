using JobbaAPI.Search.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jobba.API.Search.Infrastructure.SeedWork
{
    public interface IRepository<T> where T : class
    {
        IUnitOfWork UnitOfWork { get; }
        Task<List<T>> GetAsync();
        Task PostAsync(T entity);
    }
}
