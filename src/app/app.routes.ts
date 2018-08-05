
// Importaciones 
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component'; // Importacion del componente principal

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

import { LoginGuardGuard } from './services/guards/login-guard.guard';



const appRoutes: Routes = [ // Se crea el objeto de tipo Routes,

   
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},

    //loadChildren = primera parte es el path al modulo que quiero cargar y la segunda es el nombre del modulo.
    { path:'',component:PagesComponent,canActivate:[LoginGuardGuard],loadChildren:'./pages/pages.module#PagesModule'}, // Carga de forma dinamica. Un modulo independiente.
    { path: '**' , component: NopagefoundComponent}// Los ** es un comodin para cualquier ruta invalida.
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true}); // Se modulan las rutas para ser importadas en el module principal.