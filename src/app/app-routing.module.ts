import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PortofolioListComponent } from './portofolio-list/portofolio-list.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'portfolios-add', component: PortofolioComponent
  },
  {
    path: 'blog-add', component: BlogComponent
  },
  {
    path: 'blog-list', component: BlogListComponent
  },
  {
    path: 'portfolios-list', component: PortofolioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
