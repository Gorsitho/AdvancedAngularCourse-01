import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";






const pagesRouter: Routes =[
    { 
        path: '' , // Ruta
         component: PagesComponent, // Componente al que se quiere dirigir.
         children:[ // De esta manera se crean Subrutas partiendo del componente PagesComponent.

            { path: 'dashboard' , component: DashboardComponent},
            { path: 'progress' , component: ProgressComponent},
            { path: 'graficas1' , component: Graficas1Component},
            { path: '' , redirectTo: '/dashboard', pathMatch: 'full'} // Cualquier ruta vacia lo redirecciona al dashboard.

         ]
         },


];


export const PAGES_ROUTES = RouterModule.forChild(pagesRouter);