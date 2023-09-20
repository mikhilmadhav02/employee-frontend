import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdAllpageComponent } from './ad-allpage/ad-allpage.component';
import { EmployePageComponent } from './employe-page/employe-page.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployepageComponent } from './edit-employepage/edit-employepage.component';
import { ViewemployeComponent } from './viewemploye/viewemploye.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
{path:'admin' , component:AdminComponent},
{path:'employee', component:EmployeeComponent},
{path:'adallpage',component:AdAllpageComponent},
{path:'emallpage',component:EmployePageComponent},
{path:'addemploye',component:AddEmployeComponent},
{path:'editemploye/:id',component:EditEmployepageComponent},
{path:'viewemploye/:id',component:ViewemployeComponent},
{path:'review/:id',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
