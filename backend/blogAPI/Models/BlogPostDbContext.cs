using blogAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace blogAPI.Data
{
    public class BlogPostDbContext : DbContext
    {
        public BlogPostDbContext(DbContextOptions<BlogPostDbContext> options)
            : base(options)
        {
            
        }
        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}
