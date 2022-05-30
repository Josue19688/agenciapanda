import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agencia';
  texto='';
  correo='';
  nombre='';



  enviar(){

    if(this.texto.trim().length===0 || this.correo.length===0 || this.nombre.length===0){
      return;
    }

    //hacemos la llamada al socket
    //this.chatService.sendMessage(this.texto);
  console.log(`${this.correo} : ${this.nombre} : ${this.texto}`);
    // this.texto='';
  }
}
