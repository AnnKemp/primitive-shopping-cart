// generated product-details component via the terminal with: ng g component name
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; // is specific to each routed component that Angular Router loads. It contains information about the route, its parameters, and additional data associated with the route

import { products} from "../products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:

  constructor(private route: ActivatedRoute, ) { // by injecting the ActivatedRoute, you are configuring the component to use a service.

}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}
