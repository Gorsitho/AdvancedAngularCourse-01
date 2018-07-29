import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
//declare var swal: any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {


  usuarios: Usuario[]=[];
  desde: number=0;
  totalRegistros:number=0;
  cargando:boolean=true;


  constructor(
    public _usuarioService: UsuarioService,
    public _modalUploadService:ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion
              .subscribe(resp => this.cargarUsuarios());

  }

  mostrarModal(id:string){

    this._modalUploadService.mostrarModal('usuarios',id);

  }

  cargarUsuarios(){
    this.cargando=true;

    this._usuarioService.cargarUsuarios(this.desde)
                          .subscribe((resp:any)=>{

                                //console.log(resp);
                                this.totalRegistros=resp.total;
                                this.usuarios=resp.usuarios;
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
    this.cargarUsuarios();
  }


  buscarUsuario(termino:string){
    this.cargando=true;
    if(termino.length<=0){
        this.cargarUsuarios();
        return;
    }

    

      this._usuarioService.buscarUsuarios(termino)
                            .subscribe((usuarios:Usuario[])=>{
                              this.usuarios=usuarios;
                              this.cargando=false;
      });

  }

  borrarUsuario(usuario:Usuario){

    if (usuario._id === this._usuarioService.usuario._id) {

      swal('No se puede borrar el usuario','No se puede borrar a si mismo','error');
      return;
    }

    swal({
      title: '¿Estas seguro?',
      text: "Esta a punto de borrar a "+usuario.nombre,
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    })
    .then(borrar => {
      
    if (borrar.value) {
   

      this._usuarioService.borrarUsuario(usuario._id)
                    .subscribe(resp=>{
                      
                      console.log(resp);
                      this.cargarUsuarios();


                    });
    } 
    });
    
  }



  guardarUsuario(usuario:Usuario){

      this._usuarioService.actualizarUsuario(usuario).subscribe();


  }

}
