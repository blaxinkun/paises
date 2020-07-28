import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../models/pais';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss']
})
export class ListaPaisesComponent implements OnInit {

  @Input() paises: Pais[]


 

  constructor() { }

  ngOnInit(): void {
  }

}
