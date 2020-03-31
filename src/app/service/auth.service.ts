import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

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
          }
           
    }
    if(!this.isAuth){
      this.isAuth=false;    }
  }

  register(user){
    this.users=JSON.parse(localStorage.getItem("users"));
    this.users.push(user);
    localStorage.setItem("users",JSON.stringify(this.users)); 
    this.gotoList();
  }
  logout(){
    this.isAuth=false;
    this.router.navigate(['/login']);
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
  
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
  
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }
  


}
