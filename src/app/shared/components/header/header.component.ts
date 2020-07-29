import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  installEvent = null;
  total$: Observable<number>;
  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(
      map((cartProducts) => cartProducts.length)
    );
  }

  ngOnInit(): void {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event): void {
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(): void {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta) => console.log(rta));
    }
  }
}
