import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CART, Product, PRODUCTS} from './product.object';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  
  constructor(private router: Router,private route: ActivatedRoute){ }
 

  onViewDetail(id=-1){
    this.router.navigateByUrl('/products/detail/' + id);
		}
   addProduct(id:number){
      this.router.navigateByUrl('/products/detail/' + id);
      }
  ngOnInit(): void {
    
  }
  productList = PRODUCTS;
  shoplist=CART
  deleteProduct(id:number){
   var index=0;
    for (let product of PRODUCTS){
      if (product.id ==id){break }
      index++;
    }
    
    this.productList.splice(index, 1);
  }
  customer(){
    this.router.navigateByUrl('customer/management/' );

  }
  addcart(x:Product){
    this.shoplist.push(x);
  }
  remove(id:number){
    var index=0;
    for (let cartx of this.shoplist){
      if (cartx.id ==id){break }
      index++;
    }
    this.shoplist.splice(index, 1);
  }

}


