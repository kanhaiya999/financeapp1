import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
email="kanhaiyalalkesar@gmail.com"
password="9137842523"
isSignIn=false
  constructor(public router:Router) { }
  signIn(email,password){
    if(email==this.email && password==this.password){
    this.isSignIn=true
    //alert("successful")
    //redirect to home
this.router.navigateByUrl("/home")
  }
  else{
    alert("incorrect")
  }
}

  logout(){
    this.isSignIn=false
    console.log("console log")
    this.router.navigateByUrl("/auth")

  }

  isAuthenticated(){
    return this.isSignIn
  }
  
}
