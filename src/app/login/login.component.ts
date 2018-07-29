import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


declare function init_plugins();
declare const gapi:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  recuerdame:boolean=false;

  auth2:any;

  constructor(
    public router: Router,
    public _usuarioService:UsuarioService) { }

  ngOnInit() {  //A este se entra cada vez que se carga la pantalla.

    init_plugins();
    this.googleInit();
    this.email=localStorage.getItem('email') || '';

    if (this.email.length>1) { //Activa el check del recuerdame.

      this.recuerdame=true;
      
    }

  }

  googleInit(){


    gapi.load('auth2',()=>{

      this.auth2 = gapi.auth2.init({
        client_id:'445645126583-jgsj0udrnactjfg8df886s98rhj9f3g1.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope:'profile email'
      });

      this.attachSignin(document.getElementById('btnGoogle'));

    });
  }


  attachSignin(element){

    this.auth2.attachClickHandler(element,{},(googleUser)=>{
      
     // let profile = googleUser.getBasicProfile();
        let token = googleUser.getAuthResponse().id_token; 
        //console.log(token);
        this._usuarioService.loginGoogle(token)
                  .subscribe(()=>window.location.href='#/dashboard'); 
    // Bug al cargar la pagina, se utiliza un href para solventar el problema parcialmente.
    });

  }

  ingresar(forma: NgForm){

    if (forma.invalid) {
      return;
    }



    let usuario = new Usuario(null,forma.value.email,forma.value.password);
    console.log(forma.valid);
    console.log(forma.value);

    this._usuarioService.login(usuario,forma.value.recuerdame).subscribe(correcto=>this.router.navigate(['/dashboard']));

    //this.router.navigate(['/dashboard']);
  }

}
