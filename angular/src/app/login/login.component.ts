import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {HardCodedAuthenticationService} from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  invalidMessage: string = 'Error: Credential !';
  message: string = '';

  constructor(private router: Router, private hardCodedAuthentication: HardCodedAuthenticationService) {}
  handleLogin() {
    if (this.hardCodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.message = this.invalidMessage;
    }
  }

  ngOnInit() {}
}
