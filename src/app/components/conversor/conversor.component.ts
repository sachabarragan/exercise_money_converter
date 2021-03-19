import { Component, OnInit } from '@angular/core';
import { Moneda } from '../../models/moneda.model';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  monedaInicial: string;
  monedaFinal: string;
  listaMonedas: Moneda[];
  monto: number;
  montoFinal: number;
  control: string;


  constructor() {
    this.listaMonedas = [new Moneda('AR$'), new Moneda('USD'), new Moneda('EUR'), new Moneda('R$')];
    this.monedaInicial = 'AR$';
    this.monedaFinal = 'AR$';
    this.monto = 0;
    this.montoFinal = 0;

  }

  ngOnInit(): void {
    console.log(this.listaMonedas);
  }

  onSelectChangeInicial($event): void {
    // console.log($event.target.value);
    this.monedaInicial = $event.target.value;
    this.monto = 0;

  }

  onSelectChangeFinal($event): void {
    // console.log($event.target.value);
    this.monedaFinal = $event.target.value;
    this.montoFinal = 0;
  }
  
  onSelectChange($event): void {
    console.log($event.target.value);
    // this.stringInicial = $event.target.value;
  }

  calcularMoneda(): void{
    
    switch (this.monedaInicial){

      case 'AR$':
        switch (this.monedaFinal){
          case 'USD':
            this.montoFinal = this.monto * 0.011;
            break
          case 'EUR':
            this.montoFinal = this.monto * 0.0092;
            break
          case 'R$':
            this.montoFinal = this.monto * 0.061;
            break

            default: 
            console.log("no se pudo multiplicar");
            this.montoFinal = this.monto * 1;
            break
        }
        console.log("Es ARS");
      break

      case 'USD':
        switch (this.monedaFinal){
          case 'AR$':
            this.montoFinal = this.monto * 144;
            break
          case 'EUR':
            this.montoFinal = this.monto * 0.84;
            break
          case 'R$':
            this.montoFinal = this.monto * 5.56;
            break
          default: 
            console.log("no se pudo multiplicar");
            this.montoFinal = this.monto * 1;
            break
        }
        console.log("Es USD");
      break

      case 'EUR':
        switch (this.monedaFinal){
          case 'AR$':
            this.montoFinal = this.monto * 108.75;
            break
          case 'USD':
            this.montoFinal = this.monto * 1.19;
            break
          case 'R$':
            this.montoFinal = this.monto * 6.64;
            break
          default: 
          console.log("no se pudo multiplicar");
          this.montoFinal = this.monto * 1;
            break
        }
        console.log("Es AUR");
      break

      case 'R$':
        switch (this.monedaFinal){
          case 'AR$':
            this.montoFinal = this.monto * 16.4;
            break
          case 'USD':
            this.montoFinal = this.monto * 0.18;
            break
          case 'EUR':
            this.montoFinal = this.monto * 0.15;
            break

            default: 
            console.log("no se pudo multiplicar");
            this.montoFinal = this.monto * 1;
            break
        }
        console.log("Es REAL");
      break

      default :
        console.log("Es NADA");
        break
    }

    this.control = this.montoFinal.toFixed(2);

    this.montoFinal = parseFloat(this.control);

    
  }

}
