import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';



@NgModule({
  declarations: [ArticlesComponent, ArticleDetailsComponent, ArticleItemComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
