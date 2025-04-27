import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonLabel, IonButton, IonButtons, IonCardTitle, IonCardContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.page.html',
  styleUrls: ['./decks.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonCardContent, IonCardTitle, IonButtons, IonButton, IonLabel, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule]
})
export class DecksPage implements OnInit {
  // dummy deck data
  decks = [
    { id: 1, name: 'Top 100 German Words', description: 'Description for Deck 1' },
    { id: 2, name: 'Verbs n stuff', description: 'Description for Deck 2' },
    { id: 3, name: 'Basic French', description: 'Description for Deck 3' },
    { id: 4, name: 'Racism', description: 'Description for Deck 4 Description for Deck 4 Description for Deck 4' },
    { id: 5, name: 'Cryptocurrency terminology', description: 'Description for Deck 5' },
    { id: 6, name: 'Advanced Spanish', description: 'Description for Deck 6' },
    { id: 7, name: 'Travel Vocabulary', description: 'Description for Deck 7' },
    { id: 8, name: 'Business English', description: 'Description for Deck 8' },
    { id: 9, name: 'Science Terms', description: 'Description for Deck 9' },
    { id: 10, name: 'History Facts', description: 'Description for Deck 10' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
