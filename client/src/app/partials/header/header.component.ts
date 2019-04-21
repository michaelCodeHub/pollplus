// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Functionality for header of the app

import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

import { User } from "src/app/models/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = new User();
  }

  onLogoutClick(): void {
    this.authService.logout().subscribe(data => {
      this.flashMessage.show(data.msg, {
        cssClass: "alert-warning",
        timeOut: 5000
      });
      this.router.navigate(["/login"]);
    });
  }

  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return result;
  }
}
