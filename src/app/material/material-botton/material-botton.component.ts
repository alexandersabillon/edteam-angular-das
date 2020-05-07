import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-botton',
  templateUrl: './material-botton.component.html',
  styleUrls: ['./material-botton.component.css']
})
export class MaterialBottonComponent implements OnInit {

  formulario = {
    valido: true
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.formulario.valido = false;
    }, 3000);
  }

  onClick($event) {
    console.log('Evento click', $event);
  }

}
