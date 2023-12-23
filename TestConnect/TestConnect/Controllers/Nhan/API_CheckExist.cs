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
    public class API_CheckExist : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_CheckExist(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("check-and-create")]
        public IActionResult CheckAndCreate([FromBody] DTO_CheckExist dtoCheckExist)
        {
            try
            {
                // Kiểm tra sự tồn tại của dòng trong KhachHang_ChinhSach
                var existingRow = healthCareDBContext.Khach_Hang_Chinh_Sach
                    .Where(row => row.Id_Khach == dtoCheckExist.Id_Khach && row.Id_ChinhSach == dtoCheckExist.Id_ChinhSach)
                    .FirstOrDefault();

                if (existingRow != null)
                {
                    // Nếu dòng đã tồn tại, cập nhật Status thành "Waiting"
                    return BadRequest("Dòng dữ liệu đã tồn tại trong bảng Khach_Hang_Chinh_Sach.");
                }
                else
                {
                    // Nếu dòng không tồn tại, tạo dòng mới
                    var newRow = new Khach_Hang_Chinh_Sach
                    {
                        Id = Guid.NewGuid(),
                        Status = "Waiting",
                        BuyDate = DateTime.Now, 
                        Id_Khach = dtoCheckExist.Id_Khach,
                        Id_ChinhSach = dtoCheckExist.Id_ChinhSach
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

