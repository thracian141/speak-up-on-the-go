import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonButton, IonImg } from '@ionic/angular/standalone';
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonImg, IonButton, IonContent, IonApp, IonRouterOutlet, NavbarComponent],
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
