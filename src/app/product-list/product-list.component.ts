import { Component } from "@angular/core";

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products = products; // dit vind ik nog een beetje 'weird', moet dat geen let products zijn?

  share(){
    window.alert('The product has been shared!');
  }
}
