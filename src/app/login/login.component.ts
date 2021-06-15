import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public correctPassword = "hello";
  public user;
  public pass;


  constructor() { }

  ngOnInit(): void {
  }

  public loginFunction(user, pass) {

    if (pass != this.correctPassword) {
      alert("Password is Incorrect");
    } else {
      alert("Welcome to Namiquipa");
    }

  }

}
