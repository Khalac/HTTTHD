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
    public class API_UpdateStatus_Accept : Controller 
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_UpdateStatus_Accept(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("button-click")]

        public IActionResult UpdateStatus_Accept([FromBody] DTO_UpdateStatus_Accept dtoUpdateAccept)
        {
            try
            {
                var existingRow = healthCareDBContext.Khach_Hang_Chinh_Sach.FirstOrDefault(row => row.Id == dtoUpdateAccept.Id);

                if (existingRow == null) 
                {
                    return BadRequest("Not exist!");
                }

                existingRow.Status = "Owned";

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
