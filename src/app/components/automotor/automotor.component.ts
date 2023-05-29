import { Component,Input } from '@angular/core';
import { Automotor } from 'src/app/models/automotor.model';

@Component({
  selector: 'app-automotor',
  templateUrl: './automotor.component.html',
  styleUrls: ['./automotor.component.css']
})
export class AutomotorComponent {
  @Input() automotor: Automotor= { // Inicilizamos nuestro componente  
    
    id: 0,
    i_n: "",
    marca: "",
    descripcion: "",
    tipo: "",
    year2021: 0,
    year2020: 0,
    year2019: 0,
    year2018: 0,
    year2017: 0,
    year2016: 0,
    year2015: 0,
    year2014: 0,
    year2013: 0,
    year2012: 0,
    clase: ""

};
}
