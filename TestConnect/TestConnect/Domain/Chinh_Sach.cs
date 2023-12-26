using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TestConnect.Domain
{
    public class Chinh_Sach
    {
        [Key]
        public Guid Id_ChinhSach { get; set; }
        public string Name { get; set; }
        public int MinimumAge { get; set; } 
        public int MaximumAge { get; set; } 
        public string Description { get; set; } 
        public long MonthlyPay {  get; set; }
        public string Status { get; set; }

    }
}
