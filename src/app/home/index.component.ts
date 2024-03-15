import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './index.component.html',
})
export class Home {
  title = 'angular-demo';
}
