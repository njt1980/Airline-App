import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/customer';
import { CustomerServiceService } from 'app/customer-service.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  customer: Customer; 
  constructor(private route:ActivatedRoute,
              private location:Location,
              private customerService:CustomerServiceService,
              private fb: FormBuilder
              ){}
  

  ngOnInit(){
    console.log("In Init..");
    this.getCustomer();
  }
  getCustomer(){
    const id :number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.customerService.findCustomer(id).subscribe((customer) => {
      console.log("Customer :",customer);
      this.customer = customer;
    })
  }

  goBack(){
    this.location.back();
  }

}
