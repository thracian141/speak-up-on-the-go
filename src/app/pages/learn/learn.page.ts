import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonInput, IonLabel, IonCardContent, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule, IonItem]
})
export class LearnPage implements OnInit {
  answer: string = 'wissen';

  constructor() { }

  ngOnInit() {
  }

  calculateAnswerInputWidth() {
    const inputLength = this.answer.length;
    const fullWidth = (inputLength * 16) + 10;
    return `${fullWidth}px`;
  }
}
