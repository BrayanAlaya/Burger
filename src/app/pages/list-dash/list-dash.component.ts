import { Component } from '@angular/core';
import { Burger } from '../../models/burger.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-dash',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-dash.component.html',
  styleUrl: './list-dash.component.scss'
})
export class ListDashComponent {
  burgers: Burger[] = [
    {
      id: 1,
      name: 'Hamburguesa con queso clásica',
      description: 'Jugosa hamburguesa de ternera con queso cheddar derretido, lechuga, tomate y salsa especial',
      price: 12.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Classic+Cheeseburger'
    },
    {
      id: 2,
      name: 'Tocino Supremo',
      description: 'Hamburguesa doble de ternera con tocino crujiente, cebolla caramelizada y salsa BBQupreme',
      price: 15.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Bacon+Supreme'
    },
    {
      id: 3,
      name: 'Veggie Delight',
      description: 'Hamburguesa vegetal con aguacate fresco, brotes y mayonesa vegana',
      price: 13.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Veggie+Delight'
    }
  ];

}
