using Microsoft.AspNetCore.Mvc;
using RacerApp.Controllers.DTOs;
using RacerApp.db;
using RacerApp.db.Entities;
namespace RacerApp.Controllers
{


    [ApiController]
    [Route("api/[controller]")]

    public class DriverController : ControllerBase
    {
        private readonly RacerAppContext _context;

        public DriverController(RacerAppContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetDrivers() 
        {
            var Drivers = _context.Set<Driver>().ToList();
            return Ok(Drivers);
            
        }

        [HttpPost]
        public IActionResult AddDriver([FromBody] DriverDto driver)
        {
            Driver driverEntity = new Driver
            {
                Name = driver.name,
                Gender = driver.gender,
                Age = driver.age
            };
            _context.Set<Driver>().Add(driverEntity);
            _context.SaveChanges();
            return Ok();
        }



    }
}
