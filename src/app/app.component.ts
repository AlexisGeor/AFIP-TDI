import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { Automotor } from './models/automotor.model';
import { ColDef } from 'ag-grid-community'; // Importa la interfaz ColDef desde 'ag-grid-community'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' TDI';
  http = inject(HttpClient);
  rowData: Automotor[] = []
  filtro: string = '';
  inputValue: string = '';


  colDefs: ColDef[] = [
    { field: 'id', flex: 1, sortable: true },
    { field: 'i_n', flex: 1, headerName: 'I / N', sortable: true },
    { field: 'descripcion', flex: 2, sortable: true },
    { field: 'marca', flex: 2, sortable: true },
    { field: 'tipo', flex: 2, sortable: true },
    { field: 'clase', flex: 2, filter: true, sortable: true },
    { field: 'year2021', flex: 1, headerName: '2021', sortable: true },
    { field: 'year2020', flex: 1, headerName: '2020', sortable: true },
    { field: 'year2019', flex: 1, headerName: '2019', sortable: true },
    { field: 'year2018', flex: 1, headerName: '2018', sortable: true },
    { field: 'year2017', flex: 1, headerName: '2017', sortable: true },
    { field: 'year2016', flex: 1, headerName: '2016', sortable: true },
    { field: 'year2015', flex: 1, headerName: '2015', sortable: true },
    { field: 'year2014', flex: 1, headerName: '2014', sortable: true },
    { field: 'year2013', flex: 1, headerName: '2013', sortable: true },
    { field: 'year2012', flex: 1, headerName: '2012', sortable: true },
  ];

  search() {

    if (this.inputValue != "") {
      this.http.get<Automotor[]>('http://localhost:8080/buscar/' + this.inputValue).subscribe((data) => {
        console.log("Array de Automotor:" + data);
        this.rowData = data;

      });
    } else {
      this.capturarDatos();
    }

  }

  changeTitle() {
    this.title = ', gracias por usar nuestro sistema';
  }

  capturarDatos() {
    console.log('Test')
    this.http.get<Automotor[]>('http://localhost:8080/automotor')
      .subscribe((data) => {
        console.log(data);
        this.rowData = data;
      });
  }

  ngOnInit() {
    this.capturarDatos();
  }
}
