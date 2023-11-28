using Microsoft.EntityFrameworkCore;
using TestConnect.Domain;

namespace TestConnect.Data
{
    public class HealthCareDBContext:DbContext
    {
        public HealthCareDBContext(DbContextOptions<HealthCareDBContext> options) : base(options)
        {

        }

        public DbSet<User_Login> User_Login { get; set; }
        public DbSet<Khach_Hang> Khach_Hang { get; set; }
        public DbSet<Nhan_Vien> Nhan_Vien { get; set; } 
        public DbSet<Chinh_Sach> Chinh_Sach { get; set; }
        public DbSet<Khach_Hang_Chinh_Sach> Khach_Hang_Chinh_Sach { get; set; }
    }
}
