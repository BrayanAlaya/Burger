import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-dash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-dash.component.html',
  styleUrl: './main-dash.component.scss'
})
export class MainDashComponent {
  recentOrders = [
    { id: 'S004', items: '2x Classic Bliss', total: 25.98, status: 'Completed' },
    { id: 'S004', items: '1x Truffle Paradise', total: 15.99, status: 'Pending' },
    { id: 'S004', items: '3x Veggie Delight', total: 41.97, status: 'Completed' },
    { id: 'S004', items: '1x Classic Bliss', total: 12.99, status: 'Pending' }
  ];

  popularItems = [
    {
      name: 'Felicidad clásica',
      orders: 23,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Paraíso de la trufa',
      orders: 18,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Delicia vegetariana',
      orders: 15,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];
}
