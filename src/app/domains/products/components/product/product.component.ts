import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // img = 'https://picsum.photos/640/640?r=' + Math.random();

  @Input({required: true}) img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('Add to cart');
    this.addToCart.emit('hola desde hijo');
  }

}
