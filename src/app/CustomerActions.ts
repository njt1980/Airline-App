import { createAction,props } from "@ngrx/store";
import { Customer } from "./customer";

export const getCustomers = createAction('[Customer] get customers');

export const loadCustomers = createAction(
    '[Customer] load customers',
    props<{customers: Customer[]}>()
    );

export const addCustomer = createAction(
    '[Customer] add customer',
    props<{customer: Customer}>()
    );

export const deleteCustomer = createAction(
    '[Customer] delete customer',
    props<{customer: Customer}>()
    );
