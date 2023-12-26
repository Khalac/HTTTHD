using System.ComponentModel.DataAnnotations.Schema;
using TestConnect.Domain;

namespace _20HTTT_1.DTO.Nhan
{
    public class DTO_CheckAndCreate_KhachHangChinhSach
{
        public Guid Id_Khach { get; set; }
        public Guid Id_ChinhSach { get; set; }
    }
}
