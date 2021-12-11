import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOMER, customer } from '../customer/customer.object';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.sass']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }
  customer1: customer = {
    id: 1,
    name: '',
    email:""}

  customers=CUSTOMER
  selectedCustomer:customer = {
    id: 0,
    name: '',
    email:""}
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        if(param['id']==-1){ document.getElementById("update")?.classList.add("invisible");}
          else{document.getElementById("add")?.classList.add("invisible");}
          for (let customer3 of this.customers){
            if (customer3.id == param['id']){ this.selectedCustomer = customer3; }
          }
      }
    );

  }
  updatecustomer(b:NgForm){
    let x=b.value;
   this.selectedCustomer['name']=x['name']
   this.selectedCustomer['email']=x['email']
   this.selectedCustomer['id']=x['id']
    this.router.navigateByUrl('customer/management/');

}
addcustomer(a: NgForm){
  let x=a.value; 
  this.customer1.id = x['id'];
  this.customer1.name = x['name'];
  this.customer1.email = x['email'];
  this.customers.push(this.customer1);
  this.router.navigateByUrl('customer/management/');}}
