import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IArticle } from "src/app/shared/models/article";
import { ArticleService } from "./article.service";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: IArticle[];
  articlesLast: IArticle[];
  categories: string[];

  private _subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
    this.getLastArticles();
    this.getCategories();
  }

  getArticles() {
    this._subscriptions.push(
      this.articleService.getArticles().subscribe((res) => {
        this.articles = res;
      })
    );
  }

  getLastArticles() {
    this._subscriptions.push(
      this.articleService.getLastArticles().subscribe((res) => {
        this.articlesLast = res;
      })
    );
  }

  getCategories() {
    this._subscriptions.push(
      this.articleService.getCategories().subscribe((res) => {
        this.categories = res;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe);
  }
}
