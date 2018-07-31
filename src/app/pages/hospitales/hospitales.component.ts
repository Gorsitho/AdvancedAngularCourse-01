import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  forma: FormGroup;
  hospitales: Hospital[]=[];
  desde: number=0;
  totalRegistros:number=0;
  cargando:boolean=true;
  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService:ModalUploadService
  ) { }

  ngOnInit() {

    this.cargarHospitales();
    this._modalUploadService.notificacion
              .subscribe(resp => this.cargarHospitales());
  }
  mostrarModal(id:string){

    this._modalUploadService.mostrarModal('hospitales',id);

  }

  cargarHospitales(){
    this.cargando=true;
    this._hospitalService.cargarHospitales((this.desde))
                          .subscribe((resp:any)=>{

                               // console.log(resp);
                                this.totalRegistros=resp.total;
                                this.hospitales=resp.hospitales;
                                this.cargando=false;
                          });


  }

  cambiarDesde(valor:number){


    let desde = this.desde+valor;
    


    if (desde>=this.totalRegistros) {
      return;
    }
    if (desde<0) {
      return;
    }

    this.desde+=valor;
    this.cargarHospitales();
  }

  buscarHospital(termino:string){
    this.cargando=true;
    if(termino.length<=0){
        this.cargarHospitales();
        return;
    }

    

      this._hospitalService.buscarHospital(termino)
                            .subscribe((hospitales:Hospital[])=>{
                              this.hospitales=hospitales;
                              this.cargando=false;
      });

  }

  borrarHospital(hospital:Hospital){
 

    swal({
      title: '¿Estas seguro?',
      text: "Esta a punto de borrar a "+hospital.nombre,
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    })
    .then(borrar => {
      
    if (borrar.value) {
   

      this._hospitalService.borrarHospital(hospital._id)
                    .subscribe(resp=>{
                      
                      //console.log(resp);
                      this.cargarHospitales();


                    });
    } 
    });
  }

  guardarHospital(hospital:Hospital){

    this._hospitalService.actualizarHospital(hospital).subscribe();


}


crearHospital(){


  swal({
    title: 'Ingrese el nombre del hospital',
    input: 'text',
    showCancelButton: true,
    inputValidator: (valor) => {
      
      return !valor && 'You need to write something!';
      
      
    }
    
      
  }).then((valor)=>{
    
    if (String(valor.value)==="undefined") { // Revisar este codigo...
     return;
    }
    this._hospitalService.crearHospital(valor.value).subscribe(()=> this.cargarHospitales());
   

  });


    


}

}
