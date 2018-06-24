import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  porcentaje1: number= 30;
  porcentaje2: number= 60;
  constructor() { }

  ngOnInit() {
  }

  /*actualizar(event: number){

  this.porcentaje1=event;

  }*/  // Se puede hacer de esta manera, creando un metodo para recibir el event;



}
