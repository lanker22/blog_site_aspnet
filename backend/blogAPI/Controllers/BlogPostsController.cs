using System.Collections;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using blogAPI.Data;
using blogAPI.DTO;
using blogAPI.Profiles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace blogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly BlogPostContext _context;
        private readonly IMapper _mapper;

        public BlogPostsController(BlogPostContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<BlogPostReadDto>> GetAllBlogPosts()
        {
            var blogPostItems = _context.BlogPosts.ToList();
            return Ok(_mapper.Map<IEnumerable<BlogPostReadDto>>(blogPostItems));
        }
    }
}
