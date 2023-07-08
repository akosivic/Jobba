using JobbaAPI.Search.Domain.Entities;

namespace JobbaAPI.Search.API.DTO
{
    public class TopSearchesDTO
    {
        public Guid Id { get; private set; }
        public string? KeyWord { get;private set; }

        public TopSearchesDTO(Guid id, string keyword) {
            this.Id = id;
            this.KeyWord = keyword;
        }
    }
    
    public static class TopSearchsDTOExtensions
    {
        public static IEnumerable<TopSearchesDTO> ToDTO(this IEnumerable<SearchString> topsearch)
        {
            foreach (var search in topsearch)
            {
                yield return new TopSearchesDTO(search.Id,search.Keyword);
            }
        }
    }
}
