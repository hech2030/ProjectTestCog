import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiculeModel } from '../../Models/VehiculeModel';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {
  readonly BaseURI = 'https://localhost:44379/api';//TODO: add this value in config file

  constructor(private http: HttpClient) { }
  GetVehicule(vehicule) {
    var host = this.BaseURI + '/Warehouse/FindWarehouses';
    return this.http.get(host).pipe(
      map((data: VehiculeModel[]) => {
        return data;
      }), catchError(error => {
          return throwError('Something went wrong!');
      })
    )
  }

}
