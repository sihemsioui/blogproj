import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

    myForm: FormGroup; 

  submitted = false;
  user: User = new User();
  ngOnInit() {
    this.myForm=this.fb.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.minLength(8),
        Validators.required,
        this.authService.patternValidator(/\d/, { hasNumber: true }),
        this.authService.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.authService.patternValidator(/[a-z]/, { hasSmallCase: true }),
      
    ]),
    confirmPassword: new FormControl(null, [Validators.required]),

    },{ validators:this.authService.passwordMatchValidator});
  }

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.myForm.value);  
  
  }

}
