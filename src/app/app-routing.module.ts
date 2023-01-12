import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectsComponent,
  },
  {
    path: 'project/progress',
    component: TodoComponent,
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
export class AppRoutingModule {}
