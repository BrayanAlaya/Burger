import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cart } from '../../models/Cart.interface';
import { CartItem } from '../../models/CartItem.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.scss'
})
export class VenderComponent implements DoCheck {
  deliveryAddress = '';
  carts = [
    {
      id: 1,
      name: 'Hamburguesa Clásica',
      description: 'Jugosa carne de res con lechuga, tomate y salsa especial',
      price: 8.99,
      quantity: 1
    },
    {
      id: 2,
      name: 'Hamburguesa con Queso',
      description: 'Hamburguesa clásica con queso cheddar derretido',
      price: 9.99,
      quantity: 1
    },
    {
      id: 3,
      name: 'Hamburguesa con Bacon',
      description: 'Hamburguesa con bacon crujiente y salsa BBQ',
      price: 11.99,
      quantity: 1
    },
    {
      id: 4,
      name: 'Papas Fritas',
      description: 'Papas doradas y crujientes con sal marina',
      price: 3.99,
      quantity: 1
    },
    {
      id: 5,
      name: 'Aros de Cebolla',
      description: 'Aros de cebolla empanizados y crujientes',
      price: 4.99,
      quantity: 1
    },
    {
      id: 6,
      name: 'Refresco',
      description: 'Elección entre Coca-Cola, Sprite o Fanta',
      price: 2.49,
      quantity: 1
    }

  ];;
  orderItems: CartItem[] = [{
    id: 5,
    name: 'Aros de Cebolla',
    description: 'Aros de cebolla empanizados y crujientes',
    price: 4.99,
    quantity: 1,
    subtotal: 15
  },
  {
    id: 6,
    name: 'Refresco',
    description: 'Elección entre Coca-Cola, Sprite o Fanta',
    price: 2.49,
    quantity: 1,
    subtotal: 45
  }];

  items: CartItem[] = [{
    id: 5,
    name: 'Hamburguesa Clásica',
    description: 'Aros de cebolla empanizados y crujientes',
    price: 4.99,
    quantity: 1,
    subtotal: 8.99
  },
  {
    id: 6,
    name: 'Hamburguesa con Huevo',
    description: 'Elección entre Coca-Cola, Sprite o Fanta',
    price: 2.49,
    quantity: 1,
    subtotal: 9.99
  }];


  total = 0;
  hasAddress = false;

  ngDoCheck(): void {
    this.hasAddress = this.deliveryAddress.length > 0 ? true : false
  }

  addToOrder(product: Cart) {
    const existingItem = this.orderItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += product.quantity;
      existingItem.subtotal = existingItem.quantity * existingItem.price;
    } else {
      this.orderItems.push({
        ...product,
        subtotal: product.quantity * product.price
      });
    }

    product.quantity = 1;
  }

  removeItem(item: CartItem) {
    const index = this.orderItems.indexOf(item);
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.orderItems.reduce((total, item) => total + item.subtotal, 0);
  }

  placeOrder() {
    
  }
}
