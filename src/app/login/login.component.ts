import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    isAuth!:boolean ;
    username!:string ;
    submitted:boolean = false ;

    onSubmit(username : string , password : string){
      this.submitted = true ;
      this.username = username ;
      if(username === "admin" && password === "admin"){
        this.isAuth = true ;
      }
      else{
        this.isAuth = false ;
      }
    }
}
