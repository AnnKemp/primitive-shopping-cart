import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; // items is a property and used to store the array of the current products in the cart

  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}
