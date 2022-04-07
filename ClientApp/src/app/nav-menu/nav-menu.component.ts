import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import $ from "jquery";
import { VehiculeModel } from '../Models/VehiculeModel';
import { NavMenuService } from '../Services/NavMenu/navMenu.service';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  constructor(public router: Router, navbarService: NavMenuService) {
    navbarService.get$.subscribe(param => { this.UpdateCart(); })
  }

  PurchaseTotal = 0;
  vehicules: Array<VehiculeModel>;
  ngOnInit() {
    this.UpdateCart();

  }

  UpdateCart() {
    var cart = window.localStorage.getItem('Purchased');
    if (cart != null) {
      this.vehicules = JSON.parse(cart);
      for (var i = 0; i < this.vehicules.length; i++) {
        this.PurchaseTotal += parseFloat(this.vehicules[i].price);
      }
    }
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  OpenCartPopup() {
    console.log('ok');
    ($('#Modal') as any).modal('show');
  }
}
