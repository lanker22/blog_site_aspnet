using AutoMapper;
using blogAPI.DTO;
using blogAPI.Models;

namespace blogAPI.Profiles
{
    public class BlogPostsProfile : Profile
    {
        public BlogPostsProfile()
        {
            CreateMap<BlogPost, BlogPostReadDto>();
            CreateMap<BlogPostCreateDto, BlogPost>();
        }
    }
}
