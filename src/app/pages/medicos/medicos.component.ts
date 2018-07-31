import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';

import swal from 'sweetalert2';
import { MedicoService } from '../../services/medico/medico.service';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

    desde: number=0;
   medicos: Medico[]=[];
   cargando:boolean=true;
  constructor(
    
      public _medicoService: MedicoService

  ) { }

  ngOnInit() {

    this.cargarMedicos();
  }

  cambiarDesde(valor:number){


    let desde = this.desde+valor;
    


    if (desde>=this._medicoService.totalMedicos) {
      return;
    }
    if (desde<0) {
      return;
    }

    this.desde+=valor;
    this.cargarMedicos();
  }


  cargarMedicos(){
    this.cargando=true;
this._medicoService.cargarMedicos(this.desde)
            .subscribe( medicos => this.medicos=medicos );
            this.cargando=false;
  }

  buscarMedico( termino:string){
    this.cargando=true;
    if(termino.length<=0){
        this.cargarMedicos();
        return;
    }

    

      this._medicoService.buscarMedico(termino)
                            .subscribe((medicos:Medico[])=>{
                              this.medicos=medicos;
                              this.cargando=false;
      });

  }

  borrarMedico(medico:Medico){

   

    swal({
      title: '¿Estas seguro?',
      text: "Esta a punto de borrar a "+medico.nombre,
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    })
    .then(borrar => {
      
    if (borrar.value) {
   

      this._medicoService.borrarMedico(medico._id)
                    .subscribe(resp=>{
                      
                      console.log(resp);
                      this.cargarMedicos();


                    });
    } 
    });

  }

}
