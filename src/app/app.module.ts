import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Enrutamiento 
import { APP_ROUTES } from './app.routes';


//Modulos
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Servicios
import { ServiceModule } from './services/service.module';




@NgModule({ // Esto es un decorador.
  declarations: [ // Todos los componentes deben ser declarados en este lugar.
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
   

  
  ],
  imports: [ // Importaciones como por ejemplo un enrutamiento.
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule //Temporal
  ],
  providers: [], // Para los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
