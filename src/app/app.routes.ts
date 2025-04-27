import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'learn',
    loadComponent: () => import('./pages/learn/learn.page').then( m => m.LearnPage)
  },
  {
    path: 'decks',
    loadComponent: () => import('./pages/decks/decks.page').then( m => m.DecksPage)
  },

];
