import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyUpperPipe } from './core/pipes/my-upper.pipe';
import { UserService } from './core/services/user.service';
import { ParentComponent } from './components/Component-Interaction/parent/parent.component';
import { ChildComponent } from './components/Component-Interaction/child/child.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ObservableExamplesComponent } from './components/observable-examples/observable-examples.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    EmployeesListComponent,
    UsersListComponent,
    CustomersListComponent,
    PageNotFoundComponent,
    MyUpperPipe,
    ParentComponent,
    ChildComponent,
    CustomerDetailsComponent,
    LoginComponent,
    SignUpComponent,
    ObservableExamplesComponent,
    ApiIntegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  // providers: [UserService],// used for adding services
  exports:[],//Optional
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
