import { CarModel } from "./CarModel";
import { WarehouseLocationModel } from "./WarehouseLocationModel";

export class WarehouseModel {
  id: string = '';
  name: string;
  location: WarehouseLocationModel;
  cars: CarModel;
}
