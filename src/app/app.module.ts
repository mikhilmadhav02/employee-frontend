import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdAllpageComponent } from './ad-allpage/ad-allpage.component';
import { EmployePageComponent } from './employe-page/employe-page.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployepageComponent } from './edit-employepage/edit-employepage.component';
import { ViewemployeComponent } from './viewemploye/viewemploye.component';
import { ReviewComponent } from './review/review.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AdAllpageComponent,
    EmployePageComponent,
    AddEmployeComponent,
    EditEmployepageComponent,
    ViewemployeComponent,
    ReviewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
         HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
