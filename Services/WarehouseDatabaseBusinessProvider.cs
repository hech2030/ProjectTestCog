using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using TestProject.Common.ServicesInterface;
using TestProject.Context;
using TestProject.Models;
using TestProject.Models.InitModels;

namespace TestProject.Services
{
    public class WarehouseDatabaseBusinessProvider : IWarehouseDatabaseBusinessProvider
    {
        private static readonly MyDbContext _context = new MyDbContext();
        private readonly DbSet<VehiculeModel> VehiculeDataAccessProvider = _context.Vehicules;
        private readonly DbSet<WarehouseModel> WarehousContext = _context.Warehouses;

        public void InitDatabase()
        {
            if (!WarehousContext.Any())
            {
                StreamReader r = new StreamReader("warehouses.json");
                string jsonString = r.ReadToEnd();
                var m = JsonConvert.DeserializeObject<List<WarehouseInit>>(jsonString);

                var warehouses = new List<WarehouseModel>();
                foreach (var item in m)
                {
                    var vehicles = new List<VehiculeModel>();
                    foreach (var vehicle in item.cars.vehicles)
                    {
                        vehicles.Add(new VehiculeModel()
                        {
                            Id = vehicle._id,
                            Licensed = vehicle.licensed,
                            Make = vehicle.make,
                            Model = vehicle.model,
                            Price = vehicle.price,
                            YearModel = vehicle.year_model,
                            Date_Added = vehicle.date_added
                        });
                    }
                    warehouses.Add(new WarehouseModel()
                    {
                        Id = item._id,
                        Name = item.name,
                        Location = new WarehouseLocation()
                        {
                            Lat = item.location.lat,
                            Long = item.location.Long
                        },
                        Cars = new CarModel()
                        {
                            Location = item.cars.location,
                            Vehicles = vehicles
                        }
                    });
                }
                foreach (var item in warehouses)
                {
                    var result = WarehousContext.Add(item);
                    result.Context.SaveChanges();
                }
            }
        }

        public IList<VehiculeModel> FindVehicule()
        {
            var query = VehiculeDataAccessProvider.AsQueryable().OrderBy(a => a.Date_Added);
            return query.ToList();
        }
    }
}
