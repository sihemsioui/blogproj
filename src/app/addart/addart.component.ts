import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { AuthService } from '../service/auth.service';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-addart',
  templateUrl: './addart.component.html',
  styleUrls: ['./addart.component.css']
})
export class AddartComponent implements OnInit {
   article: Article =new Article();
  submitted=false;
  file: File= null;
   date:any;
  constructor(private articlesvc: ArticleService,private auth: AuthService) { }

  ngOnInit(): void {
  }
  onFileSelected(event){
    console.log(event);

    this.file=event.target.files[0];
    localStorage.setItem('file', event.target.files[0]);
    console.log(this.file);
  
  }
  onSubmit(){
    this.article.date=new Date();
  //  this.article.userName=this.auth.user.name;
    this.articlesvc.add(this.article);
    this.submitted=true;
  }
}
