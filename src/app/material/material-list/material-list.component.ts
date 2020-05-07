import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';
import { ClassEstudiante } from 'src/app/shared/model/class-estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  listaEstudiantes: Estudiante[];

  constructor() { }

  ngOnInit(): void {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = new ClassEstudiante(1, 'Dennis Sabillon', 'Villanueva');
    console.log('edad.estudiante1: ', this.estudiante1.getEdad());

    this.estudiante2 = {
      id: 2,
      nombre: 'Francisca mejia',
      ciudad: 'San Manuel',
      fotoURL: 'https://wordsmith.org/words/images/avatar2_large.png'
    };

    this.estudiante3 = {
      id: 3,
      nombre: 'Darwin Sabillon',
      ciudad: 'San Pedro Sula',
      fotoURL: 'https://byuc.files.wordpress.com/2012/07/avat-2.jpg'
    };

    this.listaEstudiantes = [this.estudiante1, this.estudiante2, this.estudiante3];

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Allan Sabillón',
        ciudad: 'San Pedro Sula',
        fotoURL: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png'
      }
    }, 6000);
  }

  onMouseClick($event: Estudiante) {
    console.log('Click on: ', $event.nombre);
  }
}
