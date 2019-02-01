import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { ArticleComponent } from './article/article.component';
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
    component: ArticleComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
