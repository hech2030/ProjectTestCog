using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TestProject.Models
{
    public class CarModel
    {
        public long Id { get; set; }
        public string Location { get; set; }
        public List<VehiculeModel> Vehicles { get; set; }
    }
}
