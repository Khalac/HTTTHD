using _20HTTT_1.DTO.Hung;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestConnect.Data;

namespace _20HTTT_1.Controllers.Hung
{
    [Route("api/{controller}")]
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
                return Ok(result);
            }

            result.OnSuccess = true;
            return Ok(result);
        }

    }
}
