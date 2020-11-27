using System;
using System.ComponentModel.DataAnnotations;

namespace blogAPI.DTO
{
    public class BlogPostCreateDto
    {
        [Required]
        public string Title { get; set; }
        
        [Required]
        public DateTime TimeCreated { get; set; }
        
        [Required]
        public string Content { get; set; }
    }
}
