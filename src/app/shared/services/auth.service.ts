import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { LoginApiResponse } from '../models/auth.model';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl ="https://localhost:7198/api/";
  private http = inject(HttpClient);

  private email ='';
  private name = '';
  private role = '';
  private tokenExpiration = new Date();

  private isLoggedIn = false;

  getEmail(){
    return this.email;
  }

  getName(){
    return this.name;
  }

  getRole(){
    return this.role;
  }
  getTokenExpiration(){
    return this.tokenExpiration;
  }
  getIsLoggedIn(){
    return this.isLoggedIn;
  }

  login(email: string,password:string){
    return this.http.post<LoginApiResponse>(this.baseUrl + 'users/Login',{
      username: email,
      password
    });
  }

  decodeToken(){
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    if(!token || !tokenExpiration) return;

    this.tokenExpiration = new Date(tokenExpiration);

    const jwtDecoded = jwtDecode<any>(token);

    const role = jwtDecoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const email = jwtDecoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    const name = jwtDecoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

    this.isLoggedIn = true;
  }

  logout(tokenExpired = false){
    localStorage.clear();
    this.email = '';
    this.name = '';
    this.role = '';
    this.tokenExpiration = new Date();
    this.isLoggedIn = false;
    if(tokenExpired){
      alert('Token Expirado');
    }
    else{
      alert('Logout exitoso');
    }
    
  }
}
