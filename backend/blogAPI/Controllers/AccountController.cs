using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using blogAPI.DTO;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace blogAPI.Controllers
{
    [ApiController]
    [Route("api/")]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<IdentityUser> _loginManager;

        public AccountController(SignInManager<IdentityUser> loginManager)
        {
            _loginManager = loginManager;
        }

        [Route("login")]
        [HttpPost]
        public async Task<ActionResult> Login(UserLoginDto userLoginDto)
        {
            var result = await _loginManager.PasswordSignInAsync(
                userLoginDto.UserName, 
                userLoginDto.Password, 
                false, 
                false);
            
            if (result.Succeeded)
            {
                return Ok();
            }
            ModelState.AddModelError("error", result.ToString());
            return BadRequest(ModelState);
        }

        [HttpGet]
        [Route("logout")]
        public async Task<ActionResult> Logout()
        {
            try
            {
                await _loginManager.SignOutAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("error", ex.Message);
                return BadRequest(ModelState);
            }
        }
    }
}
