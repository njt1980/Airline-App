import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'app/customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  findAllUrl:string = "http://localhost:8080/customer/getAll";
  saveUrl:string = "http://localhost:8080/customer/create";
  findCustomerUrl:string = "http://localhost:8080/customer/"
  
  constructor(private http: HttpClient) {}

  public findAll():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.findAllUrl);
  }

  public save(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(this.saveUrl, customer);
  }

  public findCustomer(customerId: number){
    console.log("Id in service..",customerId);
    const findCustomerUrl_ = this.findCustomerUrl + customerId;
    console.log(findCustomerUrl_);
    return this.http.get<Customer>(findCustomerUrl_);
  }


}
