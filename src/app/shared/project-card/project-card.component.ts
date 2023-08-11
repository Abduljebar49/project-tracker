import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'p-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project:Project = {
    name:'Project Name',
    description:'this is description of the project we are going to implement do.',
    owner:'Abduljebar Sani',
    ownerPhoto:'https://assets.codepen.io/460692/internal/avatars/users/default.png',
    ownerTitle:'Command Executive Officer',
    date:new Date(),
    backUrl:'https://source.unsplash.com/600x900/?tech,street',
    type:'Dabbal Project'
  } 

  constructor(private router:Router){}

  openProjectDetail(){
    this.router.navigateByUrl('project/progress')
  }
}