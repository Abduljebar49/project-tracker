import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';



@NgModule({
  declarations: [
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    // ProjectCardComponent
  ],
  exports:[
    ProjectCardComponent
  ]
})
export class SharedModule { }
