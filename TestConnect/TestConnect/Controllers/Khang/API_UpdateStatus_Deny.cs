using Microsoft.AspNetCore.Mvc;
using _20HTTT_1.DTO.Khang;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;
using TestConnect.Domain;

namespace _20HTTT_1.Controllers.Khang
{
    [Route("api/[controller]")]
    [ApiController]
    public class API_UpdateStatus_Deny : Controller
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_UpdateStatus_Deny(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("button-click")]

        public IActionResult UpdateStatus_Deny([FromBody] DTO_UpdateStatus_Deny dtoUpdateDeny)
        {
            try
            {
                var existingRow = healthCareDBContext.Khach_Hang_Chinh_Sach.FirstOrDefault(row => row.Id == dtoUpdateDeny.Id);

                if (existingRow == null)
                {
                    return BadRequest("Not exist!");
                }

                existingRow.Status = "Deny";

                healthCareDBContext.SaveChanges();

                return Ok("Update status complete!");
            }
            catch (Exception ex)
            {
                System.IO.File.WriteAllText("logfile.txt", ex.ToString());
                return BadRequest($"Error : {ex.Message}");
            }
        }

    }

}
