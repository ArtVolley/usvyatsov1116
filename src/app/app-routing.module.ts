import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './div/main/main.component';
import { InfoComponent } from './div/info/info.component';
import { AddformStudentsComponent } from './ui/addform-students/addform-students.component';
import { EditformStudentsComponent } from './ui/editform-students/editform-students.component';
import { FilterStudentsComponent } from './ui/filter-students/filter-students.component';


const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'add',
    component: AddformStudentsComponent,
  },
  {
    path: 'find',
    component: FilterStudentsComponent,
  },
  {
    path: 'find/:id',
    component: InfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}