import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonIcon, IonMenuButton, IonImg, IonLabel, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonContent, IonLabel, IonImg, IonButton, IonTitle, IonButtons, IonToolbar, IonHeader, IonApp, IonRouterOutlet],
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
