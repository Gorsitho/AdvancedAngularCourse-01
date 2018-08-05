import { Component, OnInit,OnDestroy } from '@angular/core';
//import { Observable, Subscriber, Subscription } from 'rxjs/Rx'; //Trae mas informacion.  
import { retry, map,filter } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';





@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  constructor() { 


   /* let obs = new Observable(observer =>{
      let contador=0;
      let intervalo = setInterval(()=>{
        contador+=1;
        observer.next(contador);

        if(contador===3){
          clearInterval(intervalo);
          observer.complete();
        }
        if(contador===2){ //Ocasiona un error, pero como el retry tiene dos intentos
                           // y el contador no se reinicia, no ocurre nada.
         // clearInterval(intervalo);
          observer.error('Auxilio!!!');
        }

      },1000);


    });*/
    //.pipe(retry(2))


    
   this.subscription= this.regresaObservable().subscribe( // retry(n) Numero de intentos que sea desea realizar
      numero => console.log('Subs',numero),  //next
      error => console.log('Error en el obs',error), //El error
      ()=> console.log('El observador termino')   // Cuando termina el observable.
    );
    /*obs.subscribe( numero =>{
      console.log('Subs',numero);
    });*/

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('La pagina se va cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any>{  //Observable<number | string >

    return new Observable(observer =>{
      let contador=0;
      let intervalo = setInterval(()=>{
        contador+=1;

        const salida={valor:contador};
        observer.next(salida);

       /* if(contador===3){
          clearInterval(intervalo);
          observer.complete();
        }*/
        //if(contador===2){ //Ocasiona un error, pero como el retry tiene dos intentos
                           // y el contador no se reinicia, no ocurre nada.
         // clearInterval(intervalo);
         // observer.error('Auxilio!!!');
        //}

      },1000);

//map(resp =>{return resp.valor;})
    }).pipe(map((resp:any) => resp.valor),
    filter((valor,index)=>{
      if((valor%2)===1){
        //Par
        return true;
      }else{
        //Impar
        return false;
      }
      //console.log('Filter',valor,index);
      
    })); // Transforma completamente la informacion y regresa lo que se necesite.
    // El operador map es como si fuera un aspersor 

    
  }

}
