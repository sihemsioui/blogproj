import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: any;
  files:any[]=[];
  constructor(private router: Router, private _sanitizer: DomSanitizer) { }

  add(article,file){
    this.articles=JSON.parse(localStorage.getItem("articles"));
    this.files=JSON.parse(localStorage.getItem("files"));
    var title=article.title;
    var reader = new FileReader();
    reader.onload = function (event) {
      reader.result;
      localStorage.setItem(title,JSON.stringify(reader.result));

   }
   reader.readAsDataURL(file);
    this.articles.push(article);
    localStorage.setItem("articles",JSON.stringify(this.articles));
    this.router.navigate(['/home']);

  }

  getArts(){
    return JSON.parse(localStorage.getItem("articles"));
  }

  getFiles(){
    var arts=this.getArts();
    for(let i=0;i<arts.length;i++){
     var img=JSON.parse(localStorage.getItem(arts[i].title))
       this.files.push(img);
    }
    return this.files;

  }
  getArticle(id){
    this.articles=JSON.parse(localStorage.getItem("articles"));
    return this.articles[id];
  }
  delete(id){
     this.articles=this.getArts();
     this.articles.splice(id,1);
     localStorage.setItem("articles",JSON.stringify(this.articles));

  }
}
