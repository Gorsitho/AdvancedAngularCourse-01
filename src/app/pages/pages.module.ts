import { NgModule } from '@angular/core';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Enrutamiento
import { PAGES_ROUTES } from './pages.router';
//ng2-charts
import { ChartsModule } from 'ng2-charts';

    
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({

declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
   
],
exports:[ // Se exportan si van a ser usadas en elementos exteriores.

    DashboardComponent,
    ProgressComponent,
    Graficas1Component

],
imports:[
    SharedModule, // Se importa el modulo compartido.
    PAGES_ROUTES, // Enrutamiento de pages. De esta manera queda todo mas separado y ordenado.
    FormsModule,
    ChartsModule
]


})

export class PagesModule {}