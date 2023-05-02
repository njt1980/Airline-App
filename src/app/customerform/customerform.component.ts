import { Observable } from 'rxjs';
import { CustomerServiceService } from 'app/customer-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'app/customer';
import { Store, select } from '@ngrx/store';
import { addCustomer, getCustomers } from 'app/CustomerActions';
import { selectItems } from 'app/CustomerReducers';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit{

  customer: Customer = new Customer();
  items$:Observable<any>;
  
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl('')
  });
  

  constructor(private customerService:CustomerServiceService,
              private store: Store<{ customer: {customers : Customer[]}}>){
                console.log("In constructor..");
                this.store.dispatch(getCustomers());
                this.items$ = this.store.pipe(select(selectItems));
              }

  ngOnInit(){}
  onSubmit(){
    // this.customer.firstName = this.customerForm['fi']
    // console.log(this.customerForm.value.lastName);
    this.createCustomer();
    this.store.dispatch(
      addCustomer({customer: this.customer})
    )
    // this.customerService.save(this.customer).subscribe((data) => {console.log("Saved...");})
  }
  createCustomer(){
    this.customer.firstName = this.customerForm.value.firstName;
    this.customer.lastName = this.customerForm.value.lastName;
    this.customer.birthDate = this.customerForm.value.birthDate;
  }
  

}
