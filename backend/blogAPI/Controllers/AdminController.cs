using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using blogAPI.Data;
using blogAPI.DTO;
using blogAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace blogAPI.Controllers
{
   // [Authorize(Roles="Administrator")]
    [Route("/api/admin/")]
    public class AdminController : Controller
    {
        private readonly BlogPostDbContext _context;
        private readonly IMapper _mapper;

        public AdminController(BlogPostDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<BlogPostReadDto>> GetAllBlogPosts()
        {
            var blogPostItems = _context.BlogPosts.ToList();
            var blogPostDtoItems = _mapper.Map<IEnumerable<BlogPostReadDto>>(blogPostItems)
                .OrderByDescending(x => x.TimeCreated);
            return Ok(blogPostDtoItems);
        }

        [HttpGet("view/{id}")]
        public ActionResult<BlogPostReadDto> GetBlogPostById(int id)
        {
            var blogPost = _context.BlogPosts.Find(id);
            if (blogPost == null)
            {
                throw new ArgumentNullException(nameof(blogPost));
            }

            return Ok(_mapper.Map<BlogPostReadDto>(blogPost));
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public ActionResult DeleteBlogPost(int id)
        {
            var blogPostToDelete = _context.BlogPosts.Find(id);
            if (blogPostToDelete == null)
            {
                throw new ArgumentNullException(nameof(blogPostToDelete));
            }

            _context.BlogPosts.Remove(blogPostToDelete);
            _context.SaveChanges();

            return NoContent();
        }

        [Route("new")]
        [HttpPost]
        public ActionResult<BlogPostReadDto> CreateBlogPost(BlogPostCreateDto blogPostCreateDto)
        {
            var blogPostModel = _mapper.Map<BlogPost>(blogPostCreateDto);
            if (blogPostModel == null)
            {
                throw new ArgumentNullException(nameof(blogPostModel));
            }
            
            _context.BlogPosts.Add(blogPostModel);
            _context.SaveChanges();

            var blogPostReadDto = _mapper.Map<BlogPostReadDto>(blogPostModel);
            return CreatedAtRoute("Get", new { blogPostReadDto.Id }, blogPostReadDto);
        }

    }
}
