import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Customer } from 'app/customer';
import { CustomerServiceService } from 'app/customer-service.service';
import { Store, select } from '@ngrx/store';
import { getCustomers, loadCustomers } from 'app/CustomerActions';
import { selectItems } from 'app/CustomerReducers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customers : Customer[];
  items$: Observable<any>;
  

  constructor(private customerService: CustomerServiceService,
              private store: Store<{ customer: {customers : Customer[]}}>){
                console.log("In Customer constructor..");
                console.log("Store :", store);
                this.store.dispatch(getCustomers());
                this.items$ = this.store.pipe(select(selectItems));
                console.log(this.items$);
              }

  ngOnInit(){
    console.log("Initializing...");
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
      console.log("data",data);
    });
   
  
    
  }




}
