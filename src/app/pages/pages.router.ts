import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';






const pagesRouter: Routes =[
    { 
        path: '' , // Ruta
         component: PagesComponent, // Componente al que se quiere dirigir.
         children:[ // De esta manera se crean Subrutas partiendo del componente PagesComponent.

            { path: 'dashboard' , component: DashboardComponent,data:{titulo:'Dashboard'}},
            { path: 'progress' , component: ProgressComponent,data:{titulo:'Progress'}},
            { path: 'graficas1' , component: Graficas1Component,data:{titulo:'Graficas'}},
            { path: 'promesas' , component: PromesasComponent,data:{titulo:'Promesas'}},
            { path: 'rxjs' , component: RxjsComponent,data:{titulo:'RxJs'}},
            { path: 'account-settings' , component: AccountSettingsComponent,data:{titulo:'Ajustes del tema'}},
            { path: '' , redirectTo: '/dashboard', pathMatch: 'full'} // Cualquier ruta vacia lo redirecciona al dashboard.

         ]
         },


];


export const PAGES_ROUTES = RouterModule.forChild(pagesRouter);