import { Component } from "@angular/core";

import { products } from '../products';

@Component({ // dit is de decorator
  selector: 'app-product-list', // the selector identifies the component. The selector is the name you give the Angular component when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app-, followed by the component name.s
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{ // dit the component definition
  // dit is dus een products property (normaal wordt dan toch een waarde toegewezen na dubbel punt?
  products = products;
  share(){
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}

