import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {HardCodedAuthenticationService} from '../services/hard-coded-authentication.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  protected userLogedIn: boolean = false;

  constructor(protected hardcodedAuthenticationSercices: HardCodedAuthenticationService) {
  }

  ngOnInit(): void {

    this.userLogedIn = this.hardcodedAuthenticationSercices.isUserLogedIn();
    console.log(this.userLogedIn);
  }
}
