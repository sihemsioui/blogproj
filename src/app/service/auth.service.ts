import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  users:any;
  user:User;
  isAuth:boolean=false;
  constructor(private router: Router) { }


  login(user){
    this.users=JSON.parse(localStorage.getItem("users")) ;
    for(var i=0;i< this.users.length; i++){
          if(user.name==this.users[i].name && user.password==this.users[i].password){

             this.user=this.users[i];
             this.isAuth=true;
            // this.gotoList();
          }
           
    }
    if(!this.isAuth){
        console.log('wrong password or username');
    }
  }

  register(user){
    this.users=JSON.parse(localStorage.getItem("users"));

    this.users.push(user);
    localStorage.setItem("users",JSON.stringify(this.users)); 
    //this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
