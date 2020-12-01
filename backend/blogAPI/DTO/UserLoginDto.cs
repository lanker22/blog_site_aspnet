using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace blogAPI.DTO
{
    public class UserLoginDto
    {
        [Required]
        [ProtectedPersonalData]
        public string UserName { get; set; }

     
        [Required]
        [ProtectedPersonalData]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
