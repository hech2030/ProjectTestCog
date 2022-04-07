import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeModel } from '../../Models/VehiculeModel';
import { WarehouseLocationModel } from '../../Models/WarehouseLocationModel';
import { WarehouseModel } from '../../Models/WarehouseModel';
import { NavMenuService } from '../../Services/NavMenu/navMenu.service';
import { VehiculeServiceService } from '../../Services/Vehicule/vehicule.service';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.css']
})
export class WarehouseDetailsComponent implements OnInit {

  Isloading: boolean;
  warehouse: WarehouseModel = new WarehouseModel();
  vehicle: VehiculeModel = new VehiculeModel();
  location: WarehouseLocationModel = new WarehouseLocationModel();
  constructor(private router: Router, private route: ActivatedRoute,
    private vehicleService: VehiculeServiceService, private navMenu: NavMenuService) { }

  ngOnInit() {
    this.Isloading = true;
    console.log(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.GetWarehouse(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: any) => {
        console.log(data.result);
        this.warehouse = data.result;
        this.vehicle = this.warehouse.cars.vehicles[0];
        this.location = this.warehouse.location;
        this.Isloading = false;
      });

  }

  AddToCart() {
    var cart = localStorage.getItem('Purchased');
    var list = [];
    if (cart != null) {
      var test = false;
      var existingList = JSON.parse(cart);
      for (var i = 0; i < existingList.length; i++) {
        if (existingList[i].id == this.vehicle.id)
          test = true;
      }
      if (!test) {
        list = existingList;
        list.push(this.vehicle);
        localStorage.setItem('Purchased', JSON.stringify(list));

      }
    }
    else {
      list.push(this.vehicle);
      localStorage.setItem('Purchased', JSON.stringify(list));
    }

    this.navMenu.triggerNavMenuGet();
  }

}
