import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path:"", component:LogInComponent, pathMatch:'full'
  },
  {
    path:"dashboard", component:DashboardComponent,
     canActivate:[AuthGuard]
  },
  {
    path:"stdform", component:StudentFormComponent, canActivate: [AuthGuard]
  },
  {
    path: "stdform/:id", component: StudentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
