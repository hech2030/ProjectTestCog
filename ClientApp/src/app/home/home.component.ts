import { Component, OnInit } from '@angular/core';
import { VehiculeModel } from '../Models/VehiculeModel';
import { VehiculeServiceService } from '../Services/Vehicule/vehicule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  vehicules: Array<VehiculeModel>;
  Isloading: boolean = true;
  constructor(private vehiculeService: VehiculeServiceService) { }

  ngOnInit() {
    this.vehiculeService.GetVehicule({})
      .subscribe((data: any) => {
        console.log(data.result);
        this.vehicules = data.result;
        this.Isloading = false;
      });
  }

  NavigateToVehicule(id) {
    console.log(id);
  }
}
