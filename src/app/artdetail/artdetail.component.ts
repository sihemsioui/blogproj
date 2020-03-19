import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artdetail',
  templateUrl: './artdetail.component.html',
  styleUrls: ['./artdetail.component.css']
})
export class ArtdetailComponent implements OnInit {

  id:number;
  article:Article;

  constructor(private articlesvc: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article = new Article();

    this.id = this.route.snapshot.params['id'];
    
    this.article =this.articlesvc.getArticle(this.id);
    console.log(this.article);
  }

}
