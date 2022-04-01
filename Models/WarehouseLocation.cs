using Microsoft.EntityFrameworkCore;

namespace TestProject.Models
{
    public class WarehouseLocation
    {
        public long Id { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
    }
}
