using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using WebApi.Dtos;
using Newtonsoft.Json;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(ApplicationDbContext context, IConfiguration configuration, ILogger<AuthController> logger)
        {
            _context = context;
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto loginDto)
        {
            Console.WriteLine("Login attempt with email: " + loginDto.email);

            var user = await _context.dataoric.SingleOrDefaultAsync(u => u.email == loginDto.email);

            if (user == null || user.password != loginDto.password)
            {
                Console.WriteLine("Invalid credentials for email: " + loginDto.email);
                return Unauthorized("Invalid credentials");
            }

            Console.WriteLine("Login successful for user: " + user.name);
            var token = GenerateJwtToken(user);

            // Print token details to the con'sole
            Console.WriteLine("JWT Token: " + token);
            Console.WriteLine("User email: " + user.email);
            Console.WriteLine("User role: " + user.role);
            Console.WriteLine("User name: " + user.name);

            // Return the token and user details in the respons
            return Ok(new
            {
                Token = token,
                Email = user.email,
                Role = user.role,
                Name = user.name
            });
        }

        private string GenerateJwtToken(Login user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"] ?? throw new InvalidOperationException("JWT key not set"));

            var claims = new[]
            {
        new Claim(ClaimTypes.Name, user.name),
        new Claim(ClaimTypes.Email, user.email),
        new Claim(ClaimTypes.Role, user.role),
        new Claim("UserId", user.dataoric_id.ToString()),  // Adding UserId claim for better control
        new Claim(JwtRegisteredClaimNames.Sub, user.email),  // Subject of the token
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),  // JWT ID
    };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = _configuration["Jwt:Issuer"],  // Set the Issuer
                Audience = _configuration["Jwt:Audience"],  // Set the Audience
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            return jwtToken;
        }

        [Authorize]
        [HttpPost("submit-ric-form")]
        public async Task<IActionResult> SubmitRicForm(ric_form_1Dto formDto)
        {
            // Log incoming data
            _logger.LogInformation($"Received data: {JsonConvert.SerializeObject(formDto)}");

            var userIdClaim = User.FindFirst("UserId")?.Value;
            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                _logger.LogWarning("Invalid user ID in token.");
                return Unauthorized("Invalid user ID in token.");
            }

            // Create the RicForm1 entity
            var ricForm = new ric_form_1
            {
                dataoric_id = userId,
                faculty_name = formDto.faculty_name,
                department_name = formDto.department_name,
                faculty_email = formDto.faculty_email,
                research_grants_submitted_hec = formDto.research_grants_submitted_hec,
                research_grants_submitted_non_hec = formDto.research_grants_submitted_non_hec,
                research_grants_approved_hec = formDto.research_grants_approved_hec,
                research_grants_approved_non_hec = formDto.research_grants_approved_non_hec,
                hec_funded_projects_completed = formDto.hec_funded_projects_completed,
                non_hec_funded_projects_completed = formDto.non_hec_funded_projects_completed,
                joint_projects_submitted = formDto.joint_projects_submitted,
                joint_projects_approved = formDto.joint_projects_approved,
                joint_projects_completed = formDto.joint_projects_completed,
                policy_advocacy_case_studies = formDto.policy_advocacy_case_studies,
                research_links_established = formDto.research_links_established,
                civic_engagements = formDto.civic_engagements,
                consultancy_contracts_executed = formDto.consultancy_contracts_executed,
                liaison_with_asrb = formDto.liaison_with_asrb,
            };

            try
            {
                _context.ric_form_1.Add(ricForm);
                await _context.SaveChangesAsync();
                _logger.LogInformation("RIC Form 1 data submitted successfully.");
                return Ok("RIC Form 1 data submitted successfully.");
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError($"Database update error occurred: {dbEx.Message}");
                return StatusCode(500, "An error occurred while saving the data to the database.");
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occurred while saving RIC form data: {ex.Message}");
                if (ex.InnerException != null)
                {
                    _logger.LogError($"Inner Exception: {ex.InnerException.Message}");
                    _logger.LogError($"Inner Exception Stack Trace: {ex.InnerException.StackTrace}");
                }
                return StatusCode(500, "An error occurred while saving the data.");
            }
        }

        [Authorize] // Optional: Add this if you want to restrict access to authenticated users.
        [HttpGet("get-all-ric-forms")]
        public async Task<IActionResult> GetAllRicForms()
        {
            try
            {
                // Retrieve all data from ric_form_1 table
                var ricForms = await _context.ric_form_1
                    .Select(ricForm => new ric_form_1Dto
                    {
                        faculty_name = ricForm.faculty_name,
                        department_name = ricForm.department_name,
                        faculty_email = ricForm.faculty_email,
                        research_grants_submitted_hec = ricForm.research_grants_submitted_hec,
                        research_grants_submitted_non_hec = ricForm.research_grants_submitted_non_hec,
                        research_grants_approved_hec = ricForm.research_grants_approved_hec,
                        research_grants_approved_non_hec = ricForm.research_grants_approved_non_hec,
                        hec_funded_projects_completed = ricForm.hec_funded_projects_completed,
                        non_hec_funded_projects_completed = ricForm.non_hec_funded_projects_completed,
                        joint_projects_submitted = ricForm.joint_projects_submitted,
                        joint_projects_approved = ricForm.joint_projects_approved,
                        joint_projects_completed = ricForm.joint_projects_completed,
                        policy_advocacy_case_studies = ricForm.policy_advocacy_case_studies,
                        research_links_established = ricForm.research_links_established,
                        civic_engagements = ricForm.civic_engagements,
                        consultancy_contracts_executed = ricForm.consultancy_contracts_executed,
                        liaison_with_asrb = ricForm.liaison_with_asrb
                    })
                    .ToListAsync();

                if (ricForms == null || ricForms.Count == 0)
                {
                    return NotFound("No RIC Form data found.");
                }

                return Ok(ricForms); // Return the data as JSON
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occurred while retrieving RIC Form data: {ex.Message}");
                return StatusCode(500, "An error occurred while retrieving the data.");
            }
        }
        [Authorize] // Optional: Add this if you want to restrict access.
        [HttpPost("filter-ric-forms")]
        public async Task<IActionResult> FilterRicForms([FromBody] RicFormFilterDto filter)
        {
            try
            {
                // Start with the base query
                var query = _context.ric_form_1.AsQueryable();

                // Apply filters dynamically
                if (!string.IsNullOrEmpty(filter.faculty_name))
                    query = query.Where(r => r.faculty_name.Contains(filter.faculty_name));

                if (!string.IsNullOrEmpty(filter.department_name))
                    query = query.Where(r => r.department_name.Contains(filter.department_name));

                if (!string.IsNullOrEmpty(filter.faculty_email))
                    query = query.Where(r => r.faculty_email.Contains(filter.faculty_email));

                if (filter.research_grants_submitted_hec.HasValue)
                    query = query.Where(r => r.research_grants_submitted_hec == filter.research_grants_submitted_hec);

                if (filter.research_grants_approved_non_hec.HasValue)
                    query = query.Where(r => r.research_grants_approved_non_hec == filter.research_grants_approved_non_hec);

                // Execute the query and project the results into DTO
                var results = await query.Select(r => new ric_form_1Dto
                {
                    faculty_name = r.faculty_name,
                    department_name = r.department_name,
                    faculty_email = r.faculty_email,
                    research_grants_submitted_hec = r.research_grants_submitted_hec,
                    research_grants_submitted_non_hec = r.research_grants_submitted_non_hec,
                    research_grants_approved_hec = r.research_grants_approved_hec,
                    research_grants_approved_non_hec = r.research_grants_approved_non_hec,
                    hec_funded_projects_completed = r.hec_funded_projects_completed,
                    non_hec_funded_projects_completed = r.non_hec_funded_projects_completed,
                    joint_projects_submitted = r.joint_projects_submitted,
                    joint_projects_approved = r.joint_projects_approved,
                    joint_projects_completed = r.joint_projects_completed,
                    policy_advocacy_case_studies = r.policy_advocacy_case_studies,
                    research_links_established = r.research_links_established,
                    civic_engagements = r.civic_engagements,
                    consultancy_contracts_executed = r.consultancy_contracts_executed,
                    liaison_with_asrb = r.liaison_with_asrb
                }).ToListAsync();

                if (!results.Any())
                {
                    return NotFound("No matching records found.");
                }

                return Ok(results);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occurred while filtering RIC forms: {ex.Message}");
                return StatusCode(500, "An error occurred while retrieving the data.");
            }
        }
    }
}

