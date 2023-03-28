using Microsoft.EntityFrameworkCore;

namespace Small_Shop_Management_System.Models
{
    public class ShopContext : DbContext
    {
        public ShopContext(DbContextOptions<ShopContext> options) : base(options)
        {


        }

        public DbSet<Bill> Bills { get; set; }
        public DbSet<Product> Products { get; set; }

        public DbSet<Admin> Admins { get; set; }

    }
}
