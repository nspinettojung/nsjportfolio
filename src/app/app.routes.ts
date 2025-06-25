import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    children: [
      { path: 'about', component: About },
      { path: 'skills', component: Skills },
      { path: 'projects', component: Projects },
      { path: 'contact', component: Contact },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
