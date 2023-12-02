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
    public class API_Policies : ControllerBase
{
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Policies(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }
        
        // Lấy toàn bộ chính sách
        // GET /api/policies
        [HttpGet]
        [Route("api/policies")]
        public IActionResult GetPolicies()
        {
            try
            {
                var policies = healthCareDBContext.Chinh_Sach
                    .Select(c => new DTO_Policies_Result
                    {
                        IdChinhSach = c.Id_ChinhSach,
                        Name = c.Name,
                        MinimumAge = c.MinimumAge,
                        MaximumAge = c.MaximumAge,
                        Description = c.Description,
                        MonthlyPay = c.MonthlyPay
                    })
                    .ToList();

                return Ok(policies);
            }
            catch (Exception ex)
            {
                return BadRequest("Đã xảy ra lỗi khi lấy danh sách chính sách bảo hiểm.");
            }
        }
        
        // Lấy chính sách theo ID
        // GET /api/policies/{id}
        [HttpGet]
        [Route("api/policies/{id}")]
        public IActionResult GetPolicyById(Guid id)
        {
            try
            {
                var policy = healthCareDBContext.Chinh_Sach
                    .Where(c => c.Id_ChinhSach == id)
                    .Select(c => new DTO_Policies_Result
                    {
                        IdChinhSach = c.Id_ChinhSach,
                        Name = c.Name,
                        MinimumAge = c.MinimumAge,
                        MaximumAge = c.MaximumAge,
                        Description = c.Description,
                        MonthlyPay = c.MonthlyPay
                    })
                    .FirstOrDefault();

                if (policy == null)
                {
                    return NotFound();
                }

                return Ok(policy);
            }
            catch (Exception ex)
            {
                return BadRequest($"Đã xảy ra lỗi khi lấy thông tin chính sách bảo hiểm có ID = {id}.");
            }
        }

        // Tạo chính sách mới
        // POST /api/policies
        [HttpPost]
        [Route("api/policies")]
        public IActionResult CreatePolicy([FromBody] DTO_Policies policyDto)
        {
            try
            {
                if (policyDto == null)
                {
                    return BadRequest("Dữ liệu không hợp lệ.");
                }

                var policy = new Chinh_Sach
                {
                    Id_ChinhSach = Guid.NewGuid(),
                    Name = policyDto.Name,
                    MinimumAge = policyDto.MinimumAge,
                    MaximumAge = policyDto.MaximumAge,
                    Description = policyDto.Description,
                    MonthlyPay = policyDto.MonthlyPay
                };

                healthCareDBContext.Chinh_Sach.Add(policy);
                healthCareDBContext.SaveChanges();

                var result = new DTO_Policies_Result
                {
                    IdChinhSach = policy.Id_ChinhSach,
                    Name = policy.Name,
                    MinimumAge = policy.MinimumAge,
                    MaximumAge = policy.MaximumAge,
                    Description = policy.Description,
                    MonthlyPay = policy.MonthlyPay
                };

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("Đã xảy ra lỗi khi tạo chính sách bảo hiểm.");
            }
        }

    }
}
