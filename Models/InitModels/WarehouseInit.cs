using System;
using System.Collections.Generic;

namespace TestProject.Models.InitModels
{
    public class WarehouseInit
    {
        public int _id { get; set; }
        public string name { get; set; }
        public location location { get; set; }
        public cars cars { get; set; }
    }

    public class vehicles
    {
        public int _id { get; set; }
        public string make { get; set; }
        public string model { get; set; }
        public int year_model { get; set; }
        public double price { get; set; }
        public bool licensed { get; set; }
        public DateTime date_added { get; set; }
    }

    public class cars
    {
        public string location { get; set; }
        public List<vehicles> vehicles { get; set; }
    }
    public class location
    {
        public double lat { get; set; }
        public double Long { get; set; }
}
}
