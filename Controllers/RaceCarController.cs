using Microsoft.AspNetCore.Mvc;
using RacerApp.Controllers.DTOs;
using RacerApp.db;
using RacerApp.db.Entities;
namespace RacerApp.Controllers
{


    [ApiController]
    [Route("api/[controller]")]

    public class RaceCarController : ControllerBase
    {
        private readonly RacerAppContext _context;

        public RaceCarController(RacerAppContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetRaceCars()
        {
            var RaceCars = _context.Set<RaceCar>().ToList();
            return Ok(RaceCars);

        }

        [HttpPost]
        public IActionResult AddRaceCar([FromBody] RaceCarDto raceCar)
        {
            RaceCar raceCarEntity = new RaceCar
            {
                Make = raceCar.make,
                Model = raceCar.model,
                Year = raceCar.year,
                Miles = raceCar.miles
            };
            _context.Set<RaceCar>().Add(raceCarEntity);
            _context.SaveChanges();
            return Ok();
        }



    }
}
