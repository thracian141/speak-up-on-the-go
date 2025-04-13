import { Component } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonButton, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonButton, IonCol, IonRow, IonGrid, IonImg, IonContent]
})
export class HomePage {
  constructor() {}
}
