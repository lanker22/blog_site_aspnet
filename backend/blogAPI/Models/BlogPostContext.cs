using blogAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace blogAPI.Data
{
    public class BlogPostContext : DbContext
    {
        public BlogPostContext(DbContextOptions<BlogPostContext> options)
            : base(options)
        {
            
        }

        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}
