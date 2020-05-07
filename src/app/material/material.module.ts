import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialBottonComponent } from './material-botton/material-botton.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialListComponent } from './material-list/material-list.component';
import { MatListModule } from '@angular/material/list';
import { ItemEstudianteComponent } from './material-list/item-estudiante/item-estudiante.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 

@NgModule({
  declarations: [MaterialDemoComponent, MaterialBottonComponent, MaterialInputComponent, MaterialListComponent, ItemEstudianteComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
