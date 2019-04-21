// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Functionality of base page for app

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-base-page",
  templateUrl: "./base-page.component.html",
  styleUrls: ["./base-page.component.css"]
})
export class BasePageComponent implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }
}
