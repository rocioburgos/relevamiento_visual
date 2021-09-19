import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authSv: AuthService, private router: Router) {


    
  }


  
  async cerrarSesion(){
    try {
      await this.authSv.LogOut();
      this.router.navigate(['/login']);
      
    } catch (error) {
      console.log("Error al cerrar sesion" + error);
    }
  }  
}
