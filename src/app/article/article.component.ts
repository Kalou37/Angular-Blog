import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor() {}

  ngOnInit() {}

  getStatus() {
    return this.postContent;
  }

  getDate() {
    // Vérifie si une date est défini et la retourne, sinon en créé une aléatoirement
    if (this.postDate) {
      return this.postDate;
    } else {
      let year = (Math.random() * 18) + 2000;
      let month = Math.random() * 11;
      let day = Math.random() * 28; // Pour éviter trop de code, je limite les jours à 28 (car février n'a que 28 jours)
      let hour = Math.random() * 23;
      let minute = Math.random() * 59;
      let second = Math.random() * 59;
      return this.postDate = new Date(year, month, day, hour, minute, second);
    }
  }

  setLove() {
    this.postLoveIts += 1;
  }

  setDislike() {
    this.postLoveIts -= 1;
  }
}
