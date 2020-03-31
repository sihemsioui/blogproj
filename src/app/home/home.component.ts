import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any;
  term: any;
  files:any;

  constructor(public articleSvc: ArticleService) { }

  ngOnInit(): void {
    this.articles= this.articleSvc.getArts();
    this.files=this.articleSvc.getFiles();
    console.log(this.files);
  }
 

}
