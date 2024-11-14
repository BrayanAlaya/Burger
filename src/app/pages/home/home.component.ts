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
      name: 'Nuestra hamburguesa insignia con salsa secreta',
      description: 'Nuestra hamburguesa insignia con salsa secreta',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Mayonesa de trufa negra y queso cheddar añejo',
      description: 'Mayonesa de trufa negra y queso cheddar añejo',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Hamburguesa a base de plantas con aguacate fresco',
      description: 'Hamburguesa a base de plantas con aguacate fresco',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];
}

