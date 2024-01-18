using _20HTTT_1.DTO.Nhan;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;
using TestConnect.Domain;

namespace _20HTTT_1.Controllers.Nhan

{
    [Route("api/{controller}")]
    [ApiController]
    public class API_ViewInfoEmployee : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_ViewInfoEmployee(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        //Xem toàn bộ thông tin nhân viên
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            var employees = healthCareDBContext.Nhan_Vien
                .Select(e => new DTO_ViewInfoEmployee
                {
                    Id_NhanVien = e.Id_NhanVien,
                    Full_Name = e.Full_Name,
                    Birhday = e.Birhday,
                    Gender = e.Gender,
                    Adress = e.Adress
                    // Thêm các thuộc tính khác tùy ý
                })
                .ToList();

            return Ok(employees);
        }

        //Xem thông tin nhân viên theo ID
        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(Guid id)
        {
            var employee = healthCareDBContext.Nhan_Vien
                .Where(e => e.Id_NhanVien == id)
                .Select(e => new DTO_ViewInfoEmployee
                {
                    Id_NhanVien = e.Id_NhanVien,
                    Full_Name = e.Full_Name,
                    Birhday = e.Birhday,
                    Gender = e.Gender,
                    Adress = e.Adress
                })
                .FirstOrDefault();

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }
    }
}
