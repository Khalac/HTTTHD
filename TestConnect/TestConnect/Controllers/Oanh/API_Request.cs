using _20HTTT_1.DTO.Oanh;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;

namespace _20HTTT_1.Controllers.Oanh
{
    [Route("api/[controller]")]
[ApiController]
public class API_Request : ControllerBase
{
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Request(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        //GET request with status = Wait
        [HttpGet]
        [Route("API_Request")]
        public IActionResult GetWaitingRequest()
        {
            try
            {
                var GetPo = healthCareDBContext.Khach_Hang_Chinh_Sach.FromSqlRaw("SELECT * FROM Khach_Hang_Chinh_Sach WHERE Status = 'Wait'").Select(pol => new RequestDTO
                {
                    Id = pol.Id,
                    Status = pol.Status,
                    IdChinhsach = pol.Chinh_Sach.Id_ChinhSach,
                    IdKhach = pol.Khach_Hang.Id_Khach,

                }).ToList();

                return Ok(GetPo);

            }
            catch (Exception)
            {
                return BadRequest("GET ERROR !!!");
            }
        }
    }
}
