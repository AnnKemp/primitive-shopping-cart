// generated product-details component via the terminal with: ng g component name
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; // is specific to each routed component that Angular Router loads. It contains information about the route, its parameters, and additional data associated with the route

import { products} from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService ) { // by injecting the ActivatedRoute, you are configuring the component to use a service. The same for CartService.
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  product;
  ngOnInit() {
    this.route.paramMap.subscribe(params => { // om de parameters uit de route te halen en met subscribe een soort constant contact te houden mochten er iets veranderen/gebeuren . . .
      this.product = products[+params.get('productId')];
    });
  }
}
