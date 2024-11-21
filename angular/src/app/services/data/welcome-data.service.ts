import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HardCodedAuthenticationService} from '../hard-coded-authentication.service';

export class HelloWorldBean {
  constructor(public message: string) { }
}


export class HelloWorldBeanError {
  constructor(public error: { message: string }) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService(): Observable<HelloWorldBean | HelloWorldBeanError> {
    return this.httpClient.get<HelloWorldBean | HelloWorldBeanError>('http://localhost:8080/hello-world-bean');
  }
}
