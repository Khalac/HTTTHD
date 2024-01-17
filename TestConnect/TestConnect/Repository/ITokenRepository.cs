using Microsoft.AspNetCore.Identity;

namespace _20HTTT_1.Repository
{
    public interface ITokenRepository
    {
        string CreateJWTToken(IdentityUser user, List<string> roles);
    }
}
