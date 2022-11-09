import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html'
})
export class IncrementComponent implements OnInit{
  
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number ){
    
    // if(this.progreso+valor>=0 && this.progreso+valor<=100){
      
    //   if ((this.progreso + valor) > 100){
    //     this.progreso = 100;
    //   } else {
    //     if ((this.progreso + valor) < 0){
    //       this.progreso = 0;
    //     } else {
    //       this.progreso = this.progreso + valor;
    //     }
    //   }
    // }
    
      if(this.progreso+valor>=0 && this.progreso+valor<=100){
        this.progreso+=valor;
      }
    
    // if( this.progreso >= 100 && valor >= 0 ){
      // this.valorSalida.emit(100);
    //   this.progreso = 100;
    // }
    // if( this.progreso <= 0 && valor >= 0 ){
    //   this.valorSalida.emit(0);
    //   this.progreso = 0;
    // }
    // this.progreso = this.progreso + valor

    this.valorSalida.emit( this.progreso );
  }

  onChange(valor: number){

    if( valor >= 100){
      this.progreso = 100
    }else if ( valor <=0 ){

    } else {
      this.progreso = valor
    }

    this.valorSalida.emit( this.progreso );  
  }
    

}
