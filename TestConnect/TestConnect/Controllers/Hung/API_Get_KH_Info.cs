using _20HTTT_1.DTO.Hung;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata.Ecma335;
using TestConnect.Data;
using TestConnect.Domain;

namespace _20HTTT_1.Controllers.Hung
{
[Route("api/[controller]")]
[ApiController]
    public class API_Get_KH_Info : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Get_KH_Info(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("Get_KH_Info")]
        public IActionResult Get_KH_Info([FromBody] DTO_Get_KH_Info_Input Input) 
        {
            var result = new DTO_Get_KH_Info_Output();
            try
            {
                if (Input == null)
                {
                    return BadRequest("Dữ liệu nhập không hợp lệ");
                };

                var CheckID = healthCareDBContext.Khach_Hang.FirstOrDefault(x => x.Id_Khach.ToString() == Input.UserId);

                if (CheckID == null)
                {
                    return BadRequest("Không tìm thấy Id khách");
                };

                result.OnSuccess = true;
                result.Full_Name = CheckID.Full_Name;
                result.Birhday = CheckID.Birhday;
                result.Adress = CheckID.Adress;
                result.Gender = CheckID.Gender;

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
