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
    },
    {
      name: 'Batido de fresa natural',
      description: 'Delicioso batido de fresa hecho con fruta fresca',
      price: 6.99,
      image: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/strawberry-smoothie.jpg'
    },
    {
      name: 'Hamburguesa BBQ con tocino caramelizado',
      description: 'Carne a la parrilla, tocino caramelizado y salsa BBQ',
      price: 14.99,
      image: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Limonada artesanal',
      description: 'Refrescante limonada hecha de limón',
      price: 3.99,
      image: 'https://www.laylita.com/recetas/wp-content/uploads/Limonada-receta.jpg'
    },
    {
      name: 'Hamburguesa doble con queso y cebolla crujiente',
      description: 'Dos jugosas carnes, queso cheddar y cebolla frita',
      price: 16.49,
      image: 'https://finnegansofdublin.com/wp-content/uploads/2023/09/232001.jpg'
    },
    {
      name: 'Smoothie tropical de mango y piña',
      description: 'Bebida tropical con mango, piña y un toque de coco',
      price: 5.99,
      image: 'https://7diasdesabor.com/wp-content/uploads/2023/05/7DDS_WEB6-2.png'
    },
    {
      name: 'Hamburguesa mexicana con jalapeños',
      description: 'Hamburguesa con jalapeños frescos y guacamole casero',
      price: 14.49,
      image: 'https://comedera.com/wp-content/uploads/sites/9/2024/10/hamburguesa-con-jalapenos.jpg?w=500&h=500&crop=1'
    },
    {
      name: 'Cerveza artesanal helada',
      description: 'Cerveza artesanal seleccionada, servida bien fría',
      price: 7.49,
      image: 'https://www.elindependiente.com/wp-content/uploads/2019/01/cervezas-artesanas.jpg'
    },
    {
      name: 'Hamburguesa clásica con salsa de ajo rostizado',
      description: 'Carne a la parrilla con salsa cremosa de ajo rostizado',
      price: 13.99,
      image: 'https://img.freepik.com/fotos-premium/hamburguesas-picante-salsa-ajo-aioli-asado_1230717-4033.jpg'
    },
    {
      name: 'Té helado de durazno',
      description: 'Té helado infusionado con duraznos frescos',
      price: 4.99,
      image: 'https://www.gastrolabweb.com/u/fotografias/m/2023/6/22/f1280x720-48606_180281_4661.jpg'
    }
  ]

}

