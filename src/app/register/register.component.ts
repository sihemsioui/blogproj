import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(
    private authService: AuthService,
    private router: Router) { }


  submitted = false;
  user: User = new User();
  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    //this.authService.register(this.user);  
  
  }

}
