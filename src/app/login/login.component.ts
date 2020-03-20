import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  user: User;
  isAuth=null;
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm=this.fb.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required])

    });
  }
  onSubmit(){
    this.user=<User>this.myForm.value;
    console.log(this.user);
    this.authService.login(this.myForm.value);  
     this.isAuth=this.authService.isAuth;
     if(this.isAuth){
      this.authService.gotoList();

     }
     console.log(this.isAuth)
  }


}
