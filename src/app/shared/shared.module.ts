import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Pipes module.
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
imports:[
    RouterModule,
    CommonModule,
    PipesModule
],
declarations:[

    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
],
exports:[


    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent

]


})



export class SharedModule{}