﻿using Microsoft.AspNetCore.Mvc;
using _20HTTT_1.DTO.Khang;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TestConnect.Data;
using TestConnect.Domain;


namespace _20HTTT_1.Controllers.Khang
{
    [Route("api/[controller]")]
    [ApiController]

    public class API_Policies : ControllerBase
    {
        private readonly HealthCareDBContext healthCareDBContext;

        public API_Policies(HealthCareDBContext healthCareDBContext)
        {
            this.healthCareDBContext = healthCareDBContext;
        }

        [HttpPut]
        [Route("api/policies/{policyId}")]

        public IActionResult EditPolicy(Guid policyID, [FromBody] DTO_Policy policydto)
        {
            try
            {
                if (policydto == null)
                {
                    return BadRequest("Dữ liệu không hợp lệ.");
                }

                var existingPolicy = healthCareDBContext.Chinh_Sach.Find(policyID);

                if (existingPolicy == null)
                {
                    return NotFound("Policy not found!");
                }

                existingPolicy.Name = policydto.Name;
                existingPolicy.MinimumAge = policydto.MinimumAge;
                existingPolicy.MaximumAge = policydto.MaximumAge;
                existingPolicy.Description = policydto.Description;
                existingPolicy.MonthlyPay = policydto.MonthlyPay;

                healthCareDBContext.SaveChanges();

                var result = new DTO_Results
                {
                    IdChinhSach = existingPolicy.Id_ChinhSach,
                    Name = existingPolicy.Name,
                    MinimumAge = existingPolicy.MinimumAge,
                    MaximumAge = existingPolicy.MaximumAge,
                    Description = existingPolicy.Description,
                    MonthlyPay = existingPolicy.MonthlyPay
                };

                return Ok(result);

            }
            catch (Exception)
            {
                return BadRequest("Cannot edit policy.");
            }
        }

        [HttpDelete]
        [Route("api/policies/{policyID}")]

        public IActionResult DeletePolicy(Guid policyID)
        {
            try
            {
                var policy = healthCareDBContext.Chinh_Sach.Find(policyID);

                if (policy == null)
                {
                    return NotFound("Chính sách không tồn tại.");
                }

                healthCareDBContext.Chinh_Sach.Remove(policy);
                healthCareDBContext.SaveChanges();

                var result = new DTO_Results
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
            catch (Exception)
            {
                return BadRequest("Cannot delete policy.");
            }
        }
    }
}