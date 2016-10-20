using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CompanySite.Startup))]
namespace CompanySite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
