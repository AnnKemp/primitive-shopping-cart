import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core"; // da's voor de decorator @input te gebruiken

@Component({ // dit is de decorator, it provides metadata about the component
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
