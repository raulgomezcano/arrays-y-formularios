import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  registrado = false
  mensaje = ""
  nombre=""
  apellido=""
  registrarUsuario(){
    this.registrado = true
    this.mensaje = "Usuario registrado"
  }
}
