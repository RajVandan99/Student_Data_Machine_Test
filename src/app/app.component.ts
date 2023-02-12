import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 username !: string;
  constructor(private _authService: AuthService,
              private _router: Router){

  }
  ngOnInit(): void {
    this.username = localStorage.getItem('username')!
  }
  onUserlogout(){
    this._authService.logOutFromApplication();
    this._router.navigate(['/']);
  }
}
