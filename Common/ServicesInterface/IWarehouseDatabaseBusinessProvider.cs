using System.Collections.Generic;
using TestProject.Models;

namespace TestProject.Common.ServicesInterface
{
    public interface IWarehouseDatabaseBusinessProvider
    {
        void InitDatabase();
        IList<VehiculeModel> FindVehicule();

    }
}
