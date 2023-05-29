import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; //Cosan nueva que usamos... proporciona las capacidades necesarias para realizar solicitudes HTTP y comunicarse con servidores remotos
import { NgOptimizedImage } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomotorComponent } from './components/automotor/automotor.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,                  // Agregamos
    NgOptimizedImage,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
