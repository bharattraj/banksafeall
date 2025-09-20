import { Component } from '@angular/core';
import { CustomerTS } from '../../types/tstypes/Customerts';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { of } from 'rxjs';
// import { Customer } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customerarray',
  // standalone: true,
  // imports: [],
  templateUrl: './customerarray.component.html',
  styleUrls: ['./customerarray.component.css']
})
export class CustomerarrayComponent {
  customers: CustomerTS[] = [
<<<<<<< HEAD
   new CustomerTS('1', 'abc', 'abcd1@gmail.com','pswrd','user1','developer'),
   new CustomerTS('2', 'bcd', 'abcd2@gmail.com','pswrd','user2','associate')
=======
   new CustomerTS('1', 'abc', 'abcd1@gmail.com','pswrd','user1','developer')
>>>>>>> 4583c673b8afd08c2527b1b46dae26e325bb9bcd
  ];
}