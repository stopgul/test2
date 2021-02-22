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
  articlesLast: IArticle[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
    this.getLastArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((res) => {
      this.articles = res;
    });
  }

  getLastArticles() {
    this.articleService.getLastArticles().subscribe((res) => {
      this.articlesLast = res;
    });
  }
}
