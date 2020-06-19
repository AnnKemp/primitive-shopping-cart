import { Component, OnInit } from '@angular/core';

import { CartService } from "../cart.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts; // make empty property
  constructor(private cartService: CartService) // inject the cart service in the ShippingComponent constructor
  { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();// die getShippingPrices method komt via de geïnjecteerde CartService van de cart service
  }
}
