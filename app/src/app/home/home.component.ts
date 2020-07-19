import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identity;
  public path:string;

  constructor() {
    this.identity = 1;
   }

  ngOnInit(): void {
    this.path = window.location.pathname;
    if(this.path === '/' || this.path === '/login') {
      this.identity = null;
    }else{
      this.identity = 1;
    }
  }

}
