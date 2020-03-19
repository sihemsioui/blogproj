import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: any;
  constructor() { }

  add(article){
    this.articles=JSON.parse(localStorage.getItem("articles"));

    this.articles.push(article);
    localStorage.setItem("articles",JSON.stringify(this.articles));
  }

  getArts(){
    return JSON.parse(localStorage.getItem("articles"));
  }
  getArticle(id){
    this.articles=JSON.parse(localStorage.getItem("articles"));
    return this.articles[id];
  }
}
