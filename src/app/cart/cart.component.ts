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
  onSubmit(customerData){ // waar komen die customerData nu weer vandaan . .  even checken
    // Process checkout data here
    this.items = this.cartService.clearCart(); // making items empty using the car service clearCart() method
    this.checkoutForm.reset(); // om het formulier leeg te maken of toch de waarden uit het formulier

    console.warn('Your order has been submitted', customerData);
  }

}
// nog een fout in het adress, het adress wordt nog niet leeggemaakt of verstuurt en de namen + prijzen worden niet getoont voordat ik het formulier invul.
