import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
 
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  isFormSubmitted: boolean = false;
  customerSuccess: string = '';
  customerError: string = '';
  customerForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required, this.noSpecialCharacters]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  // Letters and spaces only
  private noSpecialCharacters(control: AbstractControl): ValidationErrors | null {
    const value = (control.value ?? '') as string;
    if (!value) return null; // 'required' handles empty
    const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;
    return onlyLettersAndSpaces.test(value) ? null : { specialChars: true };
  }
 
  onSubmit(): void {
    this.isFormSubmitted = true;
    this.customerSuccess = '';
    this.customerError = '';
 
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      // 🔧 Match the exact string expected by the spec:
      this.customerError = 'Please correct the errors in the form.';
      return;
    }
 
    // TODO: replace with API call; propagate backend errors into customerError if needed
    console.log('Customer Data:', this.customerForm.value);
    this.customerSuccess = 'Customer added successfully!';
  }
}
 
// Keep this alias so the test importing `CustomersComponent` resolves.
export { CustomerComponent as CustomersComponent };
 