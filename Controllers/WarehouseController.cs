using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using TestProject.Common.Request;
using TestProject.Common.ServicesInterface;
using TestProject.Services;

namespace TestProject.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseController : ControllerBase
    {
        private readonly IWarehouseDatabaseBusinessProvider _warehouseDatabaseBusinessProvider;

        public WarehouseController(IWarehouseDatabaseBusinessProvider warehouseDatabaseBusinessProvider)
        {
            _warehouseDatabaseBusinessProvider = warehouseDatabaseBusinessProvider;
        }

        [HttpGet]
        [Route("FindWarehouses")]
        public ActionResult<WarehouseController> Get()
        {
            try
            {
                var result = _warehouseDatabaseBusinessProvider.FindVehicule();
                return Ok(new { result });
            }
            catch (Exception ex)
            {
                Console.Write("Exception : " + ex.Message);
                return BadRequest(new { Message = "Exception has been occured : " + ex.Message });
            }
        }
    }
}
