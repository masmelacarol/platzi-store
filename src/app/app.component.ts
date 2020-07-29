import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { SwUpdate } from '@angular/service-worker';

interface Token {
  token: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'platzi-store';
  private tokensCollections: AngularFirestoreCollection<Token>;
  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    this.tokensCollections = this.database.collection<Token>('token');
  }

  ngOnInit(): void {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA() {
    this.swUpdate.available.subscribe((value) => {
      console.log('AppComponent -> updatePWA -> value', value);
      window.location.reload();
    });
  }
  requestPermission() {
    this.messaging.requestToken.subscribe((token) => {
      this.tokensCollections.add({ token });
    });
  }

  listenNotifications() {
    this.messaging.messages.subscribe((message) => {
      console.log('AppComponent -> listenNotifications -> message', message);
    });
  }
}
