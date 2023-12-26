using _20HTTT_1.DTO.Hung;
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
public class API_CreateNewAccount_KH : ControllerBase
{
        private readonly HealthCareDBContext healthCareDBContext;

        public API_CreateNewAccount_KH(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPost]
        [Route("LoginCheck")]
        public IActionResult CreateNewAcount_KH([FromBody] DTO_CreateNewAcount_KH_Input Acount)
        {
            var ReturnValue = new DTO_CreateNewAcount_KH_OutPut();
            try {

                if (Acount == null)
                {
                    return BadRequest("Dữ liệu nhập không hợp lệ");
                };

                var CheckUserNameEx = healthCareDBContext.User_Login.FirstOrDefault(x => x.UserName == Acount.UserName);

                if (CheckUserNameEx != null)
                {
                    ReturnValue.userNameCheck = false;
                    return Ok(ReturnValue);
                };

                var New_Acount = new User_Login();

                New_Acount.UserName = Acount.UserName;
                New_Acount.Password = Acount.Password;
                New_Acount.Id = Guid.NewGuid();
                New_Acount.Status = "Open";
                New_Acount.Type = "KH";

                healthCareDBContext.User_Login.Add(New_Acount);
                healthCareDBContext.SaveChanges();

                var UserId = Guid.NewGuid();
                var LoginId = New_Acount.Id;
                var UserGender = "NA";
                var UserAdress = "NA";
                var FullName = "NA";
                var Birhday = DateTime.Now;

                var NewUSer = new Khach_Hang();

                NewUSer.Id_Khach = UserId;
                NewUSer.User_Login = New_Acount;
                NewUSer.Adress = UserAdress;
                NewUSer.Gender = UserGender;
                NewUSer.Full_Name = FullName;
                NewUSer.Birhday = Birhday;

                healthCareDBContext.Khach_Hang.Add(NewUSer);
                healthCareDBContext.SaveChanges();

                ReturnValue.userNameCheck = true;
                return Ok(ReturnValue);  
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

    }
}
