import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgForOf} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgbModule,
    JsonPipe,
    NgForOf
  ],
  templateUrl: './list-todos.component.html',
})
export class ListTodosComponent implements OnInit{
  public todos: Array<any> = [
    {id: 1, description: 'todo description 1', done: false},
    {id: 2, description: 'todo description 2', done: true},
  ]
  ngOnInit(): void {
  }
}
