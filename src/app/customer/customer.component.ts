import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMER } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }
  customerList = CUSTOMER;

  ngOnInit(): void {
  }
  deleteProduct(id:number){
    var index=0;
     for (let product of CUSTOMER){
       if (product.id ==id){break }
       index++;
     }
     this.customerList.splice(index, 1);
}
update(id:number){
  this.router.navigateByUrl('/customer/detail/' + id);

}
add(id:number){
  this.router.navigateByUrl('/customer/detail/' + id);

}
}
