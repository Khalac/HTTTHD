using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace _20HTTT_1.Data
{
    public class AuthContext : IdentityDbContext
    {
        public AuthContext(DbContextOptions<AuthContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            var readerRoleId = "4ce06a72-f8ca-44f6-b503-e18dd3a993d3";
            var writerRoleId = "b10fe295-610d-4fcd-8d37-f2c1d7c9e01a";
            var roles = new List<IdentityRole>() {

                new IdentityRole(){
                        Id= readerRoleId,
                        ConcurrencyStamp = readerRoleId,
                        Name = "Reader",
                        NormalizedName = "Reader".ToUpper()
                },

                new IdentityRole(){
                        Id= writerRoleId,
                        ConcurrencyStamp = writerRoleId,
                        Name = "Writer",
                        NormalizedName = "Writer".ToUpper()
                }

            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
