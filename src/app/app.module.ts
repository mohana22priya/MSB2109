import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsComponent } from './news/news.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { LoginComponent } from './login/login.component';
import { AngularComponent } from './technologies/angular/angular.component';
import { ReactComponent } from './technologies/react/react.component';
import { NodejsComponent } from './technologies/nodejs/nodejs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { SquarePipe } from './square.pipe';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NewsComponent,
    TechnologiesComponent,
    LoginComponent,
    AngularComponent,
    ReactComponent,
    NodejsComponent,
    PagenotfoundComponent,
    FooterComponent,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
