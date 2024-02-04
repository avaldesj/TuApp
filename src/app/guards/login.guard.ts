import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router, 
    private storage: Storage){}
  
  
  async canActivate(){
    const userLoggeIn= await this.storage.get('userLoggeIn')
    
    if(userLoggeIn){
      console.log(userLoggeIn)
      console.log('Login correcto');
      return true;
    }else{
      console.log('Login incorrecto');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
