using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TestProject.Models;

namespace TestProject.Context
{
    public class MyDbContext : DbContext
    {
        public DbSet<WarehouseModel> Warehouses { get; set; }
        public DbSet<VehiculeModel> Vehicules { get; set; }
        public DbSet<CarModel> Cars { get; set; }
        public DbSet<WarehouseLocation> WarehouseLocations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder { DataSource = "Cognizant.db" };
            var connectionString = connectionStringBuilder.ToString();
            var connection = new SqliteConnection(connectionString);

            optionsBuilder.UseSqlite(connection);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Map table names
            modelBuilder.Entity<VehiculeModel>().ToTable("Vehicules");
            modelBuilder.Entity<WarehouseModel>().ToTable("Warehouses");
            modelBuilder.Entity<CarModel>().ToTable("Cars");
            modelBuilder.Entity<WarehouseLocation>().ToTable("Locations");

            modelBuilder.Entity<WarehouseModel>().HasOne(x => x.Location);
            modelBuilder.Entity<WarehouseModel>().HasOne(x => x.Cars);

            base.OnModelCreating(modelBuilder);
        }
    }
}
