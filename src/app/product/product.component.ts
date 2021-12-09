import { Component, OnInit } from '@angular/core';
import { Product } from './product.object';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor() { }
  product: Product = {
    id: 1,
    name: 'asus',
    price: 2000,
    imageUrl: "assets/download.jfif",
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  }
  product2: Product = {
    id: 1,
    name: 'pavilion',
    price: 780,
    imageUrl: "assets/download.jfif",
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  }
  product3: Product = {
    id: 1,
    name: 'dell',
    price: 250,
    imageUrl: "assets/download.jfif",
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  }


  ngOnInit(): void {
    
  }

}


