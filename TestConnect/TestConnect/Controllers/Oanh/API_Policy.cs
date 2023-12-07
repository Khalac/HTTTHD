using _20HTTT_1.DTO.Oanh;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;

namespace _20HTTT_1.Controllers.Oanh
{
    [Route("api/[controller]")]
    [ApiController]
    public class API_Policy : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Policy(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        //GET all policies that user don't register yet
        [HttpGet]
        [Route("api/policies/{UserId}")]
        public IActionResult GetAllPolicies(Guid UserId)
        {
            try
            {
                var GetPo = healthCareDBContext.Chinh_Sach.FromSqlRaw("SELECT * FROM Chinh_Sach WHERE Chinh_Sach.Id_ChinhSach NOT IN ( SELECT Id_ChinhSach FROM Khach_Hang_Chinh_Sach WHERE Id_Khach = {0})",UserId).Select(pol => new PolicyResultDTO
                {
                    IdChinhSach = pol.Id_ChinhSach,
                    Name = pol.Name,
                    MinimumAge = pol.MinimumAge,
                    MaximumAge = pol.MaximumAge,
                    Description = pol.Description,
                    MonthlyPay = pol.MonthlyPay
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
