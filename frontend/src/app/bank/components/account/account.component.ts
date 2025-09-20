import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit(): void {
    this.accountForm = this.fb.group({
      accountId: [null, [Validators.required, Validators.min(1)]],
      customerId: [null, Validators.required],
      balance: [0, [Validators.required, Validators.min(0)]]
    });
  }
 
  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log('Account Data:', this.accountForm.value);
      // Call backend API here
    } else {
      this.accountForm.markAllAsTouched();
    }
  }
}
 