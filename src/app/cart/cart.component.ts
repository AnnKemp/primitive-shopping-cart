import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";// Angular's FormBuilder service provides convenient methods for generating controls.

import { CartService} from "../cart.service"; // selfmade

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items; // define items property to store the products in the Cart
  checkoutForm; // property to store the form model

  constructor(private cartService: CartService, private formBuilder: FormBuilder,) { // inject the cartservice so the cart component can use it, inject formbuilder so we can use if for forms
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems(); // set the items using the cart service getItems() method
  }

}
