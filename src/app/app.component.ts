import { Component } from '@angular/core';
import { Pais } from'./models/pais'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paises';




  


  paises: Pais [] = [];

  constructor() {
    this.paises.push({
      nombre:"España",
      idioma:"Español",
      moneda:"Euro",
      poblacion:40,
      capital: "Madrid"





      
    })

    this.paises.push({
      nombre:"Francia",
      idioma:"frances",
      moneda:"Euro",
      poblacion:70,
      capital: "Paris"


   })

   this.paises.push({
    nombre:"Portugal",
    idioma:"Portugues",
    moneda:"Euro",
    poblacion:10,
    capital: "Lisboa"


 })

 this.paises.push({
  nombre:"Japon",
  idioma:"Japones",
  moneda:"Yen",
  poblacion:150,
  capital: "Tokio"


})


}


addPais(p: Pais): void {

  if(p){
    this.paises.push(p)
  }


}

}
