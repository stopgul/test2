import { Component, OnInit } from "@angular/core";
import { IArticle } from "src/app/shared/models/article";
import { ArticleService } from "./article.service";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((res) => {
      this.articles = res;
    });
  }
}
