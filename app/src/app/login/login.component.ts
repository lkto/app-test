import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public identity;
  public path:string;
  constructor( private _route: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit(): void {
    this.path = window.location.pathname;
    if(this.path === '/' || this.path === '/login') {
      this.identity = null;
    }else{
      this.identity = 1;
    }
  }

  logIn() {
    localStorage.clear();
    this.identity = 1;
    window.location.href = '/home';
  }

}
