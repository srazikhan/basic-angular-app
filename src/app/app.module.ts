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
import { FormsModule } from '@angular/forms';
import { MyUpperPipe } from './core/pipes/my-upper.pipe';

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
    MyUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],//Optional
  exports:[],//Optional
  bootstrap: [AppComponent]
})

export class AppModule { }
