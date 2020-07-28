import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from '../models/pais';
@Component({
  selector: 'app-form-paises',
  templateUrl: './form-paises.component.html',
  styleUrls: ['./form-paises.component.scss']
})
export class FormPaisesComponent implements OnInit {


  @Input() paises: Pais
  @Output() paisChanged = new EventEmitter<Pais>(false);

 
  constructor(private fb: FormBuilder) {
    this.buildFormulario(fb);
  }

  guardar(value: Pais): void {
    this.paisChanged.emit(value);
  }

  ngOnInit(): void {
  }

elFormulario: FormGroup


private buildFormulario(fb: FormBuilder): void {
  this.elFormulario = fb.group({
    nombre: ['', Validators.required],
    idioma: [''],
    moneda: [''],
    poblacion: [0],
    capital: [''],
 
  });
}





}
