import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { FormPaisesComponent } from './form-paises/form-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPaisesComponent,
    FormPaisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
