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
  file: File;
   date:any;
   fileb:string;
  constructor(public articlesvc: ArticleService,private auth: AuthService) { }

  ngOnInit(): void {
  }
  onFileSelected(event){

    this.file=event.target.files[0];
  }
  onSubmit(){
    this.article.date=new Date();
    
        this.articlesvc.add(this.article,this.file);
    this.submitted=true;
    console.log(this.fileb);

  }
}
