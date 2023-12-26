using _20HTTT_1.DTO.Nhan;
using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;
using TestConnect.Domain;

namespace _20HTTT_1.Controllers.Nhan
{
    [Route("api/[controller]")]
    [ApiController]
    public class API_CheckAndCreate_KhachHangChinhSach : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_CheckAndCreate_KhachHangChinhSach(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("check-and-create-Khachhangchinhsach")]
        public IActionResult CheckAndCreate([FromBody] DTO_CheckAndCreate_KhachHangChinhSach dtoCheckExist)
        {
            try
            {
                var temp_ChinhSach = healthCareDBContext.Chinh_Sach.FirstOrDefault(x => x.Id_ChinhSach == dtoCheckExist.Id_ChinhSach);
                var temp_KhachHang = healthCareDBContext.Khach_Hang.FirstOrDefault(x => x.Id_Khach == dtoCheckExist.Id_Khach);

                //Kiểm tra sự tồn tại của dòng trong KhachHang_ChinhSach
                var existingRow = healthCareDBContext.Khach_Hang_Chinh_Sach
                   .Where(row => row.Khach_Hang == temp_KhachHang && row.Chinh_Sach == temp_ChinhSach)
                   .FirstOrDefault();

                bool isExistingRow = existingRow != null;

                if (isExistingRow && (existingRow.Status == "Using" || existingRow.Status == "Waiting"))
                {
                    return BadRequest("Dòng dữ liệu đã tồn tại trong bảng Khach_Hang_Chinh_Sach và có trạng thái là 'Using' hoặc 'Waiting'.");
                }
                else
                {
                    // Nếu dòng không tồn tại, tạo dòng mới
                    var newRow = new Khach_Hang_Chinh_Sach
                    {
                        Id = Guid.NewGuid(),
                        Status = "Waiting",
                        BuyDate = DateTime.Now,
                        Khach_Hang = temp_KhachHang,
                        Chinh_Sach = temp_ChinhSach
                    };

                    // Thêm dòng mới vào bảng
                    healthCareDBContext.Khach_Hang_Chinh_Sach.Add(newRow);
                }

                // Lưu thay đổi vào cơ sở dữ liệu
                healthCareDBContext.SaveChanges();

                return Ok("Kiểm tra và tạo dòng thành công.");
            }
            catch (Exception ex)
            {
                System.IO.File.WriteAllText("error_log.txt", ex.ToString());
                return BadRequest($"Đã xảy ra lỗi: {ex.Message}");
            }
        }
    }



}

