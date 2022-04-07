import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiculeModel } from '../../Models/VehiculeModel';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WarehouseModel } from '../../Models/WarehouseModel';

@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {
  readonly BaseURI = 'https://localhost:44379/api';//TODO: add this value in config file

  constructor(private http: HttpClient) { }
  GetVehicule() {
    var host = this.BaseURI + '/Warehouse/FindVehicle';
    return this.http.get(host).pipe(
      map((data: VehiculeModel[]) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    )
  }

  GetWarehouse(carId) {
    var host = this.BaseURI + '/Warehouse/FindWarehouse';
    return this.http.post(host, { CarId: parseInt(carId) }).pipe(
      map((data: WarehouseModel[]) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    )
  }

}
