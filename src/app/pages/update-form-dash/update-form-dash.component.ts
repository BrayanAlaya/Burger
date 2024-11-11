import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AVAILABLE_INGREDIENTS, Burger } from '../../models/burger.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-form-dash',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-form-dash.component.html',
  styleUrl: './update-form-dash.component.scss'
})
export class UpdateFormDashComponent {
  burgerForm!: FormGroup;
  availableIngredients = AVAILABLE_INGREDIENTS;
  imagePreview: string | null = null;
  
  // Mock data for demonstration
  currentBurger: Burger = {
    id: 1,
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with melted cheese',
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato'],
    price: 9.99,
    imageUrl: 'https://example.com/burger.jpg'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.burgerForm = this.fb.group({
      name: [this.currentBurger.name, [Validators.required, Validators.minLength(3)]],
      description: [this.currentBurger.description, [Validators.required, Validators.minLength(10)]],
      ingredients: [this.currentBurger.ingredients, [Validators.required, Validators.minLength(1)]],
      price: [this.currentBurger.price, [Validators.required, Validators.min(0.01)]],
      image: [null]
    });
    
    this.imagePreview = this.currentBurger.imageUrl ?? null;
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
