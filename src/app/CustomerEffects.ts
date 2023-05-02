import { CustomerServiceService } from 'app/customer-service.service';
import { addCustomer,loadCustomers,deleteCustomer, getCustomers } from './CustomerActions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CustomerEffect{
    constructor(private customerService: CustomerServiceService,
                private action$: Actions){}
    
    loadCustomers$ = createEffect(() =>
    this.action$.pipe(
        ofType(loadCustomers),
        switchMap(action => {
            const customersLoaded = this.customerService.findAll();
            return of({
                type: '[Customer] load customers', customers: customersLoaded
            })
        })
    ),{dispatch:false})

    addCustomer$ = createEffect(() =>
    this.action$.pipe(
        ofType(addCustomer),
        switchMap(action => {
            this.customerService.save(action.customer);
            const customersLoaded = this.customerService.findAll();
            return of({
                type: '[Customer] load customers', customers: customersLoaded
            })
        })
    ))

    // getCustomers$ = createEffect(() =>
    // this.action$.pipe(
    //     ofType(getCustomers),
    //     switchMap(action => {
    //         const customersLoaded = this.customerService.findAll();
    //         return of({
    //             type: '[Customer] load customers', customers: customersLoaded
    //         })
    //     })
    // )
    // )
}