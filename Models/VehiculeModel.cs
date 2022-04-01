using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestProject.Models
{
    public class VehiculeModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Make { get; set; }
        public string Model { get; set; }
        public int YearModel { get; set; }
        public double Price { get; set; }
        public bool Licensed { get; set; }
        public DateTime Date_Added { get; set; }
    }
}
