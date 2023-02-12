import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginDataService } from '../../services/login-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  @ViewChild("loginForm") loginForm !: NgForm ;
  constructor(private _authService: AuthService,
              private _router: Router,
              private _loginDataService: LoginDataService) { }

  ngOnInit(): void {
  }
  onLoginForm(){
    console.log(this.loginForm);
    this._loginDataService.loginData.forEach((user) => {
      if(user.username === this.loginForm.value.username){
        this._authService.getLogInToApplication();
        localStorage.setItem('username', user.username);
        this._router.navigate(['dashboard'])
      }
    })
  }
}
