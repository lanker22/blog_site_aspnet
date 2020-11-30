using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using blogAPI.DTO;
using Microsoft.AspNetCore.Identity;

namespace blogAPI.Profiles
{
    public class UsersProfile : Profile
    {
        public UsersProfile()
        {
            CreateMap<UserLoginDto, IdentityUser>();
        }
    }
}
