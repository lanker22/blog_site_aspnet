using System;

namespace blogAPI.DTO
{
    public class BlogPostReadDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime TimeCreated { get; set; }

        public string Content { get; set; }
    }
}
