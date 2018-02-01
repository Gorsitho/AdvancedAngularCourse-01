
// Importaciones 
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component'; // Importacion del componente principal

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [ // Se crea el objeto de tipo Routes,

   
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},

    { path: '**' , component: NopagefoundComponent}// Los ** es un comodin para cualquier ruta invalida.
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true}); // Se modulan las rutas para ser importadas en el module principal.