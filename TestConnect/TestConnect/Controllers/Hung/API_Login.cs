using _20HTTT_1.DTO.Hung;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;

namespace _20HTTT_1.Controllers.Hung
{
    [Route("api/[controller]")]
    [ApiController]
    public class API_Login : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Login(HealthCareDBContext healthCareDBContext)
        { 
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("LoginCheck")]
        public IActionResult CheckAccount([FromBody] DTO_Login Acount )
        {
            DTO_Login_Result result = new DTO_Login_Result();
            result.OnSuccess = true;

            var Check_UserName_Password = healthCareDBContext.User_Login.FirstOrDefault(x => x.UserName == Acount.User_Name && x.Password == Acount.Password);
            
            if (Check_UserName_Password == null) {
                result.OnSuccess = false;
                result.UserId = "No";
                return Ok(result);
            }

            var UserLoginId = Check_UserName_Password.Id.ToString();
            var Get_UserID = healthCareDBContext.Khach_Hang.FromSqlRaw("SELECT * FROM Khach_Hang WHERE User_Login_id = {0}", UserLoginId).ToList();

            result.OnSuccess = true;
            result.UserId = Get_UserID[0].Id_Khach.ToString();
            return Ok(result);
        }

    }
}
