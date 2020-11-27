﻿using System;
using System.ComponentModel.DataAnnotations;

namespace blogAPI.Models
{
    public class BlogPost
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public DateTime TimeCreated { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
