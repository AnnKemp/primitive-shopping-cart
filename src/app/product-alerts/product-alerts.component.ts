import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core"; // da's voor de decorator @input te gebruiken

@Component({ // dit is de decorator, it provides metadata about the component
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // this is a property named product with an @Input decorator. The @Input decorator indicates that the property value passes in from the component's parent, the product list component
  constructor() { }

  ngOnInit(): void {
  }

}
