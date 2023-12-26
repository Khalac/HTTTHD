using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace TestConnect.Domain
{
    public class Khach_Hang_Chinh_Sach
    {
        [Key]
        public Guid Id { get; set; }
        public string Status { get; set; }
        public DateTime BuyDate { get; set; }


        [ForeignKey("Id_Khach")]
        public Khach_Hang Khach_Hang { get; set; }

        [ForeignKey("Id_ChinhSach")]
        public Chinh_Sach Chinh_Sach { get; set; }
    }
}
