using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using AutoMapper;
using blogAPI.Data;
using blogAPI.DTO;
using blogAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace blogAPI.Controllers
{
    [Route("api/")]
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

        [HttpGet]
        public ActionResult<IEnumerable<BlogPostReadDto>> GetAllBlogPosts()
        {
            var blogPostItems = _context.BlogPosts.ToList();
            var blogPostDtoItems = _mapper.Map<IEnumerable<BlogPostReadDto>>(blogPostItems)
                .OrderByDescending(x => x.TimeCreated);
            return Ok(blogPostDtoItems);
        }

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
    }
}

