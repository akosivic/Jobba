using Jobba.API.Search.Infrastructure.Data;
using Jobba.API.Search.Infrastructure.SeedWork;
using JobbaAPI.Search.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jobba.API.Search.Infrastructure.Repository
{

    public class SearchRepository :IRepository<SearchString>
    {
        private readonly SearchDBContext _searchDbContext;

        public IUnitOfWork UnitOfWork => throw new NotImplementedException();

        public SearchRepository(SearchDBContext searchDbContext)
        {
            this._searchDbContext = searchDbContext;
        }

        public async Task<List<SearchString>> GetAsync()
        {
            return await this._searchDbContext.SearchStrings.OrderByDescending(p => p.SearchCount).Take<SearchString>(5).ToListAsync();
        }

        public async Task PostAsync(SearchString keyword)
        {
            var searchkeyword = this._searchDbContext.SearchStrings.Where(p=>p.Keyword == keyword.Keyword).FirstOrDefault();
            if (searchkeyword == null) {
                this._searchDbContext.SearchStrings.Add(new SearchString(keyword.Keyword));
            }
            else
            {
                searchkeyword.Increment();
                this._searchDbContext.SearchStrings.Update(searchkeyword);
            }
            await _searchDbContext.SaveChangesAsync();
        }
    }
}
