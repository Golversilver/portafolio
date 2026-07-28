import { Routes } from '@angular/router';

export const routes: Routes = [

   {
    path: 'Portafolio',
     loadComponent: () => import('./pages/portafolio/portafolio')
   },

   {
    path: 'Portfolio',
     loadComponent: () => import('./pages/portfolio/portfolio')
   },

   {
    path: "**",
    redirectTo: "Portafolio"
   }

];
