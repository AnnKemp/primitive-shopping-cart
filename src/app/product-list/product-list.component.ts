import { Component } from "@angular/core";

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  // dit is dus een products property (normaal wordt dan toch een waarde toegewezen na dubbel punt?
  products = products;
  share(){
    window.alert('The product has been shared!');
  }
}
