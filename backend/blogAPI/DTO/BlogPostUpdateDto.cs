using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace blogAPI.DTO
{
    public class BlogPostUpdateDto
    {
        [Required] public int Id { get; set;}

        [Required] public string Title { get; set; }

        [Required] public string Content { get; set; }
    }
}
