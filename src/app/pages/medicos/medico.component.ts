import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from '../../models/hospital.model';
import { MedicoService } from '../../services/medico/medico.service';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Medico } from '../../models/medico.model';
import { Router,ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  
  hospitales:Hospital[]=[];
  medico:Medico=new Medico('','','','',''); //Hace match con la cuarta comillas vacia con el Seleccion un hospital.
  hospital:Hospital=new Hospital('');




  constructor(
    public _medicoService:MedicoService,
    public _hospitalService:HospitalService,
    public router:Router,
    public activatedRoute:ActivatedRoute,
    public _modalUploadService:ModalUploadService

  ) { 

    activatedRoute.params.subscribe(params=>{
    
      let id=params['id'];

      if (id !=='nuevo') {
        
        this.cargarMedico(id);

      }
    });


  }

  ngOnInit() {

    this._hospitalService.cargarHospitales(-1)
          .subscribe( resp=>this.hospitales=resp.hospitales);


    this._modalUploadService.notificacion.subscribe(resp=>{

        this.medico.img=resp.medico.img;
    });
  }

  guardarMedico(f: NgForm){


    if (f.invalid) {
      return;
    }


    this._medicoService.guardarMedico(this.medico)
          .subscribe(medico=>{
          this.medico._id=medico._id;
          this.router.navigate(['/medico',medico._id]);

          });




  }


  cambioHospital(id:string){

      this._hospitalService.obtenerHospital(id)
          .subscribe(hospital=> this.hospital=hospital);

  }


  cargarMedico(id:string){


    this._medicoService.cargarMedico(id).subscribe(medico=>{

     
      this.medico=medico;
      this.medico.hospital=medico.hospital._id;
      this.cambioHospital(this.medico.hospital);
    
    });

  }

  cambiarFoto(){

    this._modalUploadService.mostrarModal('medicos',this.medico._id);

  }

}
