import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { TodoComponent } from './todo/todo.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project/progress',
    component: TodoComponent,
  },
  {
    path: 'project/register',
    component: NewProjectComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
