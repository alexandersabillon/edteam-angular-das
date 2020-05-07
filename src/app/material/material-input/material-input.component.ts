import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'Juan Lopez'
  };

  placeholder = {
    nombre: 'Su nombre',
  };

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.usuario.nombre = 'Dennis Sabillon';
    }, 3000);
  }

  onKeyUp($event) {
    console.log('KeyUp, ', $event);
  }

  onBlur($event: FocusEvent) {
    console.log('OnBlur, ', $event);
  }

}
