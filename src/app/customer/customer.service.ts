import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// //just get map
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const URL_CUSTOMER = 'data/customer.json';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get(URL_CUSTOMER)
        .map((response: Response) => response.json())
        .toPromise()
        .catch((err: any) => {
            console.log(err);   // again, customize me please
            return Promise.reject(err);
        });
    }

    getCustomers_RxObservable() {
        return this._http.get(URL_CUSTOMER)
        .map((response: Response) => response.json())
        .catch(this._handlerError);
    }

    _handlerError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }
}


// import { Http } from '@angular/http';

// const URL_CUSTOMER = 'app/customer.json';

// @Injectable()
// export class CustomerService {

//     constructor(private _http: Http) { }

//     getCustomers() {
//         this._http.get(URL_CUSTOMER)
//     }
// }