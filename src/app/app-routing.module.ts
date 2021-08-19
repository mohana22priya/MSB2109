import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AngularComponent } from './technologies/angular/angular.component';
import { NodejsComponent } from './technologies/nodejs/nodejs.component';
import { ReactComponent } from './technologies/react/react.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'news',component:NewsComponent},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'angular',component:AngularComponent},
    {path:'react',component:ReactComponent},
    {path:'nodejs',component:NodejsComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
