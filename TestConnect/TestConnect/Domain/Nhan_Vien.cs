using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TestConnect.Domain
{
    public class Nhan_Vien
    {
        [Key]
        public Guid Id_NhanVien { get; set; }
        public string Full_Name { get; set; }
        public DateTime Birhday { get; set; }
        public string Gender { get; set; }
        public string Adress { get; set; }

        [ForeignKey("NhanVien_Login_id")]
        public User_Login User_Login { get; set; }
    }
}
