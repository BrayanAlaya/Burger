import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AVAILABLE_INGREDIENTS, Burger } from '../../models/burger.interface';

@Component({
  selector: 'app-create-form-dash',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-form-dash.component.html',
  styleUrl: './create-form-dash.component.scss'
})
export class CreateFormDashComponent {
  burgerForm!: FormGroup;
  availableIngredients = AVAILABLE_INGREDIENTS;
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.burgerForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      ingredients: [[], [Validators.required, Validators.minLength(1)]],
      price: ["", [Validators.required, Validators.min(0.01)]],
      image: [null]
    });
  }

  onIngredientToggle(ingredient: string) {
    const currentIngredients = this.burgerForm.get('ingredients')?.value || [];
    const index = currentIngredients.indexOf(ingredient);
    
    if (index === -1) {
      currentIngredients.push(ingredient);
    } else {
      currentIngredients.splice(index, 1);
    }
    
    this.burgerForm.patchValue({ ingredients: currentIngredients });
  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  isIngredientSelected(ingredient: string): boolean {
    return this.burgerForm.get('ingredients')?.value?.includes(ingredient) || false;
  }

  onSubmit() {
    if (this.burgerForm.valid) {
      console.log(this.burgerForm.value);
      // Handle form submission
    }
  }

  onCancel() {
    this.initForm();
  }
}
