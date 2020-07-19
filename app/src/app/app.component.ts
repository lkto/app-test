import { Component,OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  public title:string;
  public identity;
  public path:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ){
    this.title = 'LOOPA';
  }

  ngOnInit(){
    this.path = window.location.pathname;
    if(this.path === '/' || this.path === '/login') {
      this.identity = null;
    }else{
      this.identity = 1;
    }
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
