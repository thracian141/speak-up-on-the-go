import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonButtons, IonHeader]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
