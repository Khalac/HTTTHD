using System.ComponentModel.DataAnnotations.Schema;
using TestConnect.Domain;

namespace _20HTTT_1.DTO.Nhan
{
    public class DTO_CheckExist
{
        public Guid Id { get; set; }
        public string Status { get; set; }
        public DateTime BuyDate { get; set; }

        public Guid Id_Khach { get; set; }
        public Guid Id_ChinhSach { get; set; }


    }
}
