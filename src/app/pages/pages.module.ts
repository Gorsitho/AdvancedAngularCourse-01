import { NgModule } from '@angular/core';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Enrutamiento
import { PAGES_ROUTES } from './pages.router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';



@NgModule({

declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
exports:[ // Se exportan si van a ser usadas en elementos exteriores.

    DashboardComponent,
    ProgressComponent,
    Graficas1Component

],
imports:[
    SharedModule, // Se importa el modulo compartido.
    PAGES_ROUTES // Enrutamiento de pages. De esta manera queda todo mas separado y ordenado.
]


})

export class PagesModule {}