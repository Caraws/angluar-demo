import TodoListItem from "./item.component";
import {Component} from "@angular/core";

@Component({
  standalone: true,
  imports: [TodoListItem],
  templateUrl: './list.component.html'
})

export class TodoList {
  taskList = [
    {name: 'Essentials', description: 'key points of Angular'},
    {name: 'Data Management', description: 'maintain data flow'},
    {name: 'Router Mapping', description: 'manage routes mapping'},
  ]
}
