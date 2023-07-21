using JobbaAPI.Search.Domain.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace JobbaAPI.Search.Test
{
    [TestClass]
    public class JobbaAPISearchTest
    {
        [TestMethod] 
        public void Increment_Test()
        {
            SearchString searchString = new SearchString("test");
            searchString.Increment();
            Assert.AreEqual(2, searchString.SearchCount);
        }
    }
}