import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
