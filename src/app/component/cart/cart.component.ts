import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private router: Router) { }

  counter: number = 1;
  onIncrement(): void {
    this.counter += 1;
  }

  onDecrement(): void {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
  onClickCheckOut() {
    this.router.navigate(['order']);
  }
}
