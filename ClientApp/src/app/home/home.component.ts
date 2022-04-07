import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculeModel } from '../Models/VehiculeModel';
import { VehiculeServiceService } from '../Services/Vehicule/vehicule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  vehicules: Array<VehiculeModel>;
  Isloading: boolean = true;
  constructor(private vehiculeService: VehiculeServiceService, private router: Router) { }

  ngOnInit() {
    this.vehiculeService.GetVehicule()
      .subscribe((data: any) => {
        console.log(data.result);
        this.vehicules = data.result;
        this.Isloading = false;
      });
  }

  NavigateToVehicule(id) {
    this.router.navigate(['/warehouseDetail/' + id]);
  }
}
