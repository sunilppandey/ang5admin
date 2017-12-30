import { Component } from '@angular/core';

// import { CustomerComponent } from './customer/customer.component';
// import { CustomerService } from './customer/customer.service';

// barrel
// import { CustomerService } from './customer';
import { CustomerService } from './customer/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
  // directives: [CustomerComponent]
})
export class AppComponent {
  title = 'app';
  name = 'Aditya';
}
