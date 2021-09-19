import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomePage},
  {path:'', component:LoginComponent} 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
