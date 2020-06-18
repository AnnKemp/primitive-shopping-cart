import { Component, OnInit } from '@angular/core';// OnInit is een interface
import { Input } from "@angular/core"; // da's om de decorator @input te gebruiken
import { Output, EventEmitter } from "@angular/core";

@Component({ // dit is de decorator, it provides metadata about the component
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // this is a property named product with an @Input decorator. The @Input decorator indicates that the property value passes in from the component's parent, the product list component
  @Output() notify= new EventEmitter(); //property notify, this allows the product alert component to emit an event when the value of the notify property changes, the output decorator stuurt de data terug naar boven in de three naar product-list.components.ts
}
