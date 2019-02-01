import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentComponent } from './comment/comment.component';
const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'authors',
    component: AuthorComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/:id',
    component: ArticleComponent
  },
  {
    path: 'comment/:article-key',
    component: CommentComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
