import {Component, Input } from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'todo-list-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.less',
  imports: [
    NgClass
  ]
})

export default class TodoListItem {
  @Input() taskName: string = 'Initial Task Name'
  @Input() taskDescription: string = 'Initial Task Description'
  isComplete = false

  constructor() { }
  onCompleteTask () {
    this.isComplete = !this.isComplete
  }

  updateTaskName (newName: string) {
    this.taskName = newName
  }
}
