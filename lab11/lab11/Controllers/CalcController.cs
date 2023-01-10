using lab11.Models;
using Microsoft.AspNetCore.Mvc;

namespace lab11.Controllers
{
    public class CalcServiceController : Controller
    {
        private readonly ILogger<CalcServiceController> logger;

        public CalcServiceController(ILogger<CalcServiceController> logger)
        {
            this.logger = logger;
        }

        public IActionResult PassUsingModel()
        {
            return View(CalcService.GetCalcModel());
        }

        public IActionResult PassUsingViewBag()
        {
            var Model = CalcService.GetCalcModel();
            ViewBag.CalcModel = new CalcModel()
            {
                firstValue = Model.firstValue,
                secondValue = Model.secondValue,
                sum = Model.sum,
                dif = Model.dif,
                mul = Model.mul,
                div = Model.div
            };
            return View();
        }

        public IActionResult PassUsingViewData()
        {
            var Model = CalcService.GetCalcModel();
            ViewData["CalcModel"] = new CalcModel()
            {
                firstValue = Model.firstValue,
                secondValue = Model.secondValue,
                sum = Model.sum,
                dif = Model.dif,
                mul = Model.mul,
                div = Model.div
            };
            return View();
        }
        public IActionResult AccesServiceDirectly()
        {
            return View();
        }
    }
}