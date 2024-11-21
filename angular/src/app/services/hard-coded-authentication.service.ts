import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean
  {
    if (username === 'guest' && password === 'guest') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  logout(): void{
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLogedIn(): boolean {
    return sessionStorage.getItem('authenticatedUser') !== null;
  }
}
