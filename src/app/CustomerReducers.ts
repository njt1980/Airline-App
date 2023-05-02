import { loadCustomers } from "./CustomerActions";
import { on, createReducer } from '@ngrx/store';
import { Customer } from "./customer";

export interface State{
    customer: {customers: Customer[]}
}

export const initialState: State = {
    customer: {customers:[]}
}

export const CustomerReducer = createReducer(
    initialState,
    on(loadCustomers,(state,action) => ({
        ...state,
        customers: action.customers
    }))
)

export const selectItems = (state: State) => state.customer.customers;