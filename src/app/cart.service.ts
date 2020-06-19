import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";// Now that the appModule imports the HttpClientModule, the next step is to inject the HttpClient service into your service so your app can fetch data and interact with external APIs and resources.

@Injectable({ // services maken gebruik van @Injectables
  providedIn: 'root'
})
export class CartService {
  items = []; // items is a property and used to store the array of the current products in the cart
  constructor(private http: HttpClient) { // inject the HttpClient to use
  }

  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){ // functies hoeven in Angular het woordje 'function' er niet voor
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
