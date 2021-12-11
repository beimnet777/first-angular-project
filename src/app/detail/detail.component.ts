import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS,Product } from '../product/product.object';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {


  constructor(private route: ActivatedRoute,private router: Router) { }
  product1: Product = {
    id: 1,
    name: '',
    price: 2000,
    imageUrl: '',
    description: ''}

  products=PRODUCTS
  selectedProduct=PRODUCTS[0]
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        if(param['id']==-1){ document.getElementById("update")?.classList.add("invisible");}
          else{document.getElementById("add")?.classList.add("invisible");}
          for (let product of this.products){
            if (product.id == param['id']){ this.selectedProduct = product; }
          }
      }
    );

  }
  updateProduct(f:NgForm){
    let x=f.value;
   this.selectedProduct['name']=x['name']
   this.selectedProduct['price']=x['price']
    this.router.navigateByUrl('');
	
    
  }
  addProduct(g: NgForm){
    let x=g.value; 
    this.product1.id = x['id'];
    this.product1.name = x['name'];
    this.product1.price = x['price'];
    this.product1.imageUrl = 'assets/download.jfif';
    this.product1.description = x['description'];
    this.products.push(this.product1);
    this.router.navigateByUrl('');

	
  
  

  }
  

}
