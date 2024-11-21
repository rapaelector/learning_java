import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {HelloWorldBean, HelloWorldBeanError, WelcomeDataService} from '../services/data/welcome-data.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    RouterLink,
    NgIf,
  ],
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  username: string = '';
  welcomeMessageFromService: string | undefined;
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {}
  ngOnInit() {
    this.username = this.route.snapshot.params['name'];
  }

  protected readonly name = name;

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => {

        if (!(response instanceof HelloWorldBeanError)) {
          this.welcomeMessageFromService = response.message;
        }
      },
      error => {
        console.log(error.error.message);
      }
    )
  }
}
