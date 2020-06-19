import { Component, OnInit } from '@angular/core';
import { CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items; // define items property to store the products in the Cart
  constructor(private cartService: CartService) { }// inject the cartservice so the cart component can use it

  ngOnInit() {
    this.items = this.cartService.getItems(); // set the items using the cart service getItems() method
  }

}
