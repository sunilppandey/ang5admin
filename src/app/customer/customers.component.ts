import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CustomerService } from './customer.service';

import 'rxjs/add/observable/of';

@Component({
    // all these are providers
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {
    customers: any[];
    // customers: any[];
    // customers: Promise<any[]>;

    // private _customerService: CustomerService;
    constructor(private _customerService: CustomerService) {
        // this._customerService = customerService;
    }

    ngOnInit() {
        // Rx Observable version with subscribe function to a customer array
        this._customerService.getCustomers_RxObservable()
        .subscribe(
            // it worked
            (customers) => this.customers = customers,
            // error
            (err) => { console.log(err); }
        );

        // Straight up promise to array
        // this._customerService.getCustomers()
        // .then((customers) => this.customers = customers)
        // .catch((err) => {
        //     console.log(err);
        // });

        // Promise any
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });

        // Rx Observable version
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });
     }
}
