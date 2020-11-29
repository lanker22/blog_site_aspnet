using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using AutoMapper;
using blogAPI.Data;
using blogAPI.DTO;
using blogAPI.Models;
using blogAPI.Profiles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace blogAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Administrator")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly BlogPostDbContext _context;
        private readonly IMapper _mapper;

        public HomeController(BlogPostDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IEnumerable<BlogPostReadDto>> GetAllBlogPosts()
        {
            var blogPostItems = _context.BlogPosts.ToList();
            return Ok(_mapper.Map<IEnumerable<BlogPostReadDto>>(blogPostItems));
        }

        [AllowAnonymous]
        [HttpGet("{id}", Name = "Get")]
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

