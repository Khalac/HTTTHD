using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestConnect.Domain
{
    public class Khach_Hang
    {
        [Key]
        public Guid Id_Khach { get; set; }    
        public string Full_Name { get; set; }
        public DateTime Birhday { get; set; }
        public string Gender { get; set; }  
        public string Adress { get; set; }


        [ForeignKey("User_Login_id")]
        public User_Login User_Login { get; set; }  


    }
}
