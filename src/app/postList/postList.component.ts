import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-postList",
  templateUrl: "./postList.component.html",
  styleUrls: ["./postList.component.scss"]
})
export class PostListComponent implements OnInit {
  @Input() posts: any[];

  constructor() {}

  ngOnInit() {}
}
