import { Cart } from "./Cart.interface";

export interface CartItem extends Cart {
    subtotal: number
}