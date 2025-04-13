import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonIcon, IonMenuButton, IonImg, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonLabel, IonImg, IonIcon, IonButton, IonTitle, IonButtons, IonToolbar, IonHeader, IonApp, IonRouterOutlet, IonMenuButton],
})
export class AppComponent {
  constructor() {}
}
