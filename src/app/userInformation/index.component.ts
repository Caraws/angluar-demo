import {Component, Input, OnInit} from "@angular/core";
import {UserService} from "@app/services/user/index.service";

@Component({
  selector: 'user-information',
  standalone: true,
  templateUrl: './index.component.html'
})
export class UserInformation {
  @Input() id!: string // get route information from route params

  userInformation: User | null = null

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.getUserInformation()
  }

  getUserInformation() {
    this.userService.getUserInformation(this.id)
      .subscribe((responseData) =>  {
        this.userInformation = responseData
      })
  }
}
