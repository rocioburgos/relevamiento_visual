import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent }from './pages/login/login.component';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent,
  LoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HomePageModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
