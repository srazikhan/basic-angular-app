import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/Component-Interaction/parent/parent.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ChildAuthGuard } from './core/guards/child-auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'customers', canActivateChild:[ChildAuthGuard], children:[
    {path:'',component:CustomersListComponent},
    {path:'customer-details/:customerId/:customerName',component:CustomerDetailsComponent},
  ]},
  {path:'users',component:UsersListComponent},
  {path:'employees',component:EmployeesListComponent},
  {path:'component-interaction',component:ParentComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
