import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { BlogComponent } from './blog/blog.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PortofolioListComponent } from './portofolio-list/portofolio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    PortofolioComponent,
    DashboardComponent,
    BlogListComponent,
    PortofolioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
