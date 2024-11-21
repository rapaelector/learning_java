import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from '@angular/common';
import {LoginComponent} from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, LoginComponent, NgbModule, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'my-app';
  name: string = 'Patrick';
  datas : Array<string> = ['test1', 'test2', 'test3'];
  protected readonly parseInt = parseInt;
}
