import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {

  constructor() { }
  loginUser(Credential: any){
    return new Promise((accept,reject)=>{
    if(
      Credential.email=='alexi@pca.edu.co'&&
      Credential.password=='Alexi1234'
    ){
      accept('login correcto');
    }else{
      reject('Login incorrecto');
    }
    });
  }

  registerUser(Credential: any) {
    return new Promise((accept,reject)=>{
              accept('Registro exitoso ');
      
      });
    }

  
}
