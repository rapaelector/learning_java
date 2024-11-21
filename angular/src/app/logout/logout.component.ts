import {Component, OnInit} from '@angular/core';
import {HardCodedAuthenticationService} from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(private hardCodedAuthenticaitonService: HardCodedAuthenticationService){}

  ngOnInit(): void {
    this.hardCodedAuthenticaitonService.logout();
  }
}
