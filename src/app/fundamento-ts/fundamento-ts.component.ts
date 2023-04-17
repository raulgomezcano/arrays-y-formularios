import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {
  edad: number = 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25
  valor_introducido: number = 0
  resultado: string =""
  constructor(){}
  ngOnInit(): void{
  }
  esBecario(){
      if (this.valor_introducido == this.edad){
        this.resultado= "Las personas con " + this.valor_introducido + " obtienen beca"
        console.log("Tiene beca, valor = " + this.valor_introducido + ", edad = " + this.edad)
      }
      else{
        this.resultado= "Las personas con " + this.valor_introducido + " no obtienen beca"
        console.log("NO tiene beca, valor = " + this.valor_introducido + ", edad = " + this.edad)
      }
  }
}
