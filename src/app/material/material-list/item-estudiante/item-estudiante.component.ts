import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'ed-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  @Input()
  estudiante: Estudiante;
  readonly DEFAULT_PICTURE = 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png';

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Estudiante) {
    this.onMouseClick.emit(e);
  }

}
