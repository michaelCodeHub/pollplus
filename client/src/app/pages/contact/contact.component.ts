// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Functionality of contact us page.

import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute, private authService: AuthService) {
    super(route);
  }

  ngOnInit() {}

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
