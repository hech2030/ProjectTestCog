using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TestProject.Models
{
    public class WarehouseModel
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public WarehouseLocation Location { get; set; }
        [Required]
        public CarModel Cars { get; set; }
    }
}
