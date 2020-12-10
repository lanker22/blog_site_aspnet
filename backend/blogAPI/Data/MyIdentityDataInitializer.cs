using Microsoft.AspNetCore.Identity;

namespace blogAPI.Data
{
    public static class MyIdentityDataInitializer
    {
        public static void SeedData(
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        public static void SeedUsers(UserManager<IdentityUser> userManager)
        {
            if (userManager.FindByNameAsync("admin1").Result == null)
            {
                var user = new IdentityUser();
                user.UserName = "admin1";
                IdentityResult result = userManager.CreateAsync
                    (user, "Password1!").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Administrator").Wait();
                }
            }
        }

        public static void SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            if (!roleManager.RoleExistsAsync("Administrator").Result)
            {
                var role = new IdentityRole();
                role.Name = "Administrator";
                roleManager.CreateAsync(role).Wait();
            }
        }
    }
}
