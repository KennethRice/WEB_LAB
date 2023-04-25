using Microsoft.AspNetCore.Mvc;

namespace Project6.Controllers
{
    public class ToysController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
