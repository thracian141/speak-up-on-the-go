import { Component } from '@angular/core';
import { IonContent, IonButton, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonButton, IonContent, RouterLink]
})
export class HomePage {
  constructor() {}
}
