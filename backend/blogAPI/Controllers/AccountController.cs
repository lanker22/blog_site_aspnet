using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using blogAPI.DTO;
using Microsoft.AspNetCore.Identity;

namespace blogAPI.Controllers
{
    [ApiController]
    [Route("api/")]
    public class AccountController : Controller
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
                return Json(result);
            }
            ModelState.AddModelError(string.Empty, "Invalid login attempt");
            return Unauthorized();
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
                ModelState.AddModelError(string.Empty, ex.Message);
                return BadRequest();
            }
        }
    }
}
