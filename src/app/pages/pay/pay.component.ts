import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.scss'
})
export class PayComponent {
  totalAmount: number = 19.99;
  selectedMethod: string = '';
  paymentForm: FormGroup;
  isProcessing: boolean = false;
  paymentMessage: string = '';
  paymentStatus: string = '';

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      yapeId: ['', [Validators.pattern('^[0-9]{9}$')]]
    });
  }

  selectMethod(method: string) {
    this.selectedMethod = method;
    this.paymentForm.reset();
    this.paymentMessage = '';
  }

  resetForm() {
    this.selectedMethod = '';
    this.paymentForm.reset();
    this.paymentMessage = '';
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.isProcessing = true;
      this.paymentMessage = '';

      // Simulate payment processing
      setTimeout(() => {
        this.isProcessing = false;
        // Simulate successful payment (you would replace this with actual payment processing)
        if (Math.random() > 0.5) {
          this.paymentMessage = 'Payment Successful!';
          this.paymentStatus = 'success';
          setTimeout(() => this.resetForm(), 2000);
        } else {
          this.paymentMessage = 'Payment Failed. Please try again.';
          this.paymentStatus = 'error';
        }
      }, 2000);
    }
  }
}
