import {Component, OnInit} from "@angular/core";
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {UserService} from '@app/services/user/index.service'

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (isLogin) {
      <p>Username: {{ username }}</p>
    } @else {
      <p>Login First</p>
    }
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework"/>
    </label>
    <button (click)="onSubmit()">Submit</button>
  `
})

export class Login implements OnInit {
  favoriteFramework = ''
  isLogin = true
  username = 'cara'

  constructor(private router: Router,private userService: UserService) {
  }

  ngOnInit() {}
  onSubmit() {
    this.userService.Login(this.favoriteFramework)
      .subscribe((userId: string | null) => {
        console.log(userId)
        if (userId) {
          this.goToUserDetail(userId)
        }
      })
  }

  goToUserDetail(userId: string) {
    this.router.navigate([`/user/${userId}`])
  }
}
