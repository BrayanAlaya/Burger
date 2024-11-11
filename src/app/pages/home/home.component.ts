import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  burgers = [
    {
      name: 'Classic Bliss',
      description: 'Our signature burger with secret sauce',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Truffle Paradise',
      description: 'Black truffle mayo and aged cheddar',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Veggie Delight',
      description: 'Plant-based patty with fresh avocado',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];
}

