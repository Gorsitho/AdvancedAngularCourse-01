import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/hospital/hospital.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { MedicoService } from '../../services/medico/medico.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  

  usuarios:Usuario[]=[];
  medicos:Medico[]=[];
  hospitales:Hospital[]=[];

  desde: number=0;
  cargando:boolean=true;

  constructor(
    public activatedRouter:ActivatedRoute,
    public http:HttpClient,
    
    ) { 

    activatedRouter.params.subscribe(params=>{

      let termino = params['termino'];
      if (termino.length>0) {
        this.buscar(termino);
      //console.log(termino);
      }
      
    });

  }

  ngOnInit() {
  }

  buscar(termino:string){
    
    let url =URL_SERVICIOS+'/busqueda/todo/'+termino;

    this.http.get(url)
      .subscribe((resp:any)=>{
       // console.log(resp);
        this.usuarios=resp.usuarios;
        this.medicos=resp.medicos;
        this.hospitales=resp.hospitales;
      });

  }

  

}
