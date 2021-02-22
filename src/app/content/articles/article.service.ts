import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IArticle } from "src/app/shared/models/article";
import { catchError, map } from "rxjs/operators";
import { empty, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getArticle(assetId: string): Observable<IArticle> {
    let params = new HttpParams();
    params = params.append("assetId", assetId);
    return this.http.get<IArticle>(this.baseUrl + "content").pipe(
      map((response) => {
        return response;
      })
    );
  }

  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.baseUrl + "content").pipe(
      map((response) => {
        console.log(`article: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError((err) => {
        console.log(`error: ${JSON.stringify(err)}`);
        return empty();
      })
    );
  }

  getLastArticles(): Observable<IArticle[]> {
    let params = new HttpParams();
    params = params.append("limit", "5");
    return this.http.get<IArticle[]>(this.baseUrl + "content").pipe(
      map((response) => {
        console.log(`article: ${JSON.stringify(response)}`);
        return response;
      }),
      catchError((err) => {
        console.log(`error: ${JSON.stringify(err)}`);
        return empty();
      })
    );
  }

  getArticlesBySection(categoryName: string): Observable<IArticle[]> {
    let params = new HttpParams();
    params = params.append("categoryName", categoryName);
    return this.http
      .get<IArticle[]>(this.baseUrl + "content/GetArticlesByCategory")
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
