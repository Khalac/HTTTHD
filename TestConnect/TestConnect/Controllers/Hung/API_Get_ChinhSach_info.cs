using _20HTTT_1.DTO.Hung;
using _20HTTT_1.DTO.Nhan;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata.Ecma335;
using TestConnect.Data;
using TestConnect.Domain;

namespace _20HTTT_1.Controllers.Hung
{
    [Route("api/[controller]")]
[ApiController]
public class API_Get_ChinhSach_info : ControllerBase
{
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Get_ChinhSach_info(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("API_Get_ChinhSach_Info_Active_Disable")]
        public IActionResult Get_ChinhSach_Info_Active_Disable([FromBody] DTO_Get_ChinhSach_Info_Input Input)
        {
            var result = new DTO_Get_KH_Info_Output();
            try
            {
                if (Input == null)
                {
                    return BadRequest("Dữ liệu nhập không hợp lệ");
                };

                var CheckID = healthCareDBContext.Chinh_Sach
                    .Where(x => x.Status == Input.Status)
                    .Select(x => new DTO_Get_ChinhSach_Info_OutPut
                    {
                        IdChinhSach = x.Id_ChinhSach,
                        Name = x.Name,
                        MinimumAge = x.MinimumAge,
                        MaximumAge = x.MaximumAge,
                        Description = x.Description,
                        MonthlyPay = x.MonthlyPay,
                        Status = x.Status
                    }
                    ).ToList();

                if (CheckID == null)
                {
                    return BadRequest("Không tìm thấy chính sách theo yêu cầu");
                };

                return Ok(CheckID);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


}
}
