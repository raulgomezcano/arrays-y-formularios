import { Component } from '@angular/core';

@Component({
  selector: 'app-funciones-principales-array',
  templateUrl: './funciones-principales-array.component.html',
  styleUrls: ['./funciones-principales-array.component.css']
})
export class FuncionesPrincipalesArrayComponent {
  arr1 : Array<number> = [2,5,9,4]
  dias : Array<String> = ["lunes","martes","miercoles","jueves","viernes","sabado"]
  constructor(){}
  ngOnInit(){
    //El metodo pop elimina el ultimo elemento del array
    this.arr1.pop()
    console.log(this.arr1)
    //El metodo push agrega un elemento al final del array
    this.dias.push("domingo")
    console.log(this.dias)
    //El metodo length devuelve el tamaño del array
    console.log("El array dias tiene un tamaño de: " +this.dias.length)
    //El metodo indexOf devuelve la posición de un elemento conocido
    console.log("La posicion del 9 es: " + this.arr1.indexOf(9))
    //El metodo at devuelve el valor del elemento contenido en el índice que le pasamos
    console.log("El dia 5 es el: " +this.dias.at(4))
  }
}
