import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  loans:any;
  details:any;
  

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {

    this.http.get('https://ostram.herokuapp.com/api/user/',{withCredentials:true}).subscribe(
      res => {
        console.log(res);
        this.profile = res;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.profile = 'Not logged in';
        Emitters.authEmitter.emit(false);
      }
    );

    this.http.get('http://127.0.0.1:8000/api/loans/',{withCredentials:true}).subscribe(
      res => {
        console.log(res);
        this.loans = res;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.loans = 'Not logged in';
        Emitters.authEmitter.emit(false);
      }
    );

    this.http.get('http://127.0.0.1:8000/api/details/',{withCredentials:true}).subscribe(
      res => {
        console.log(res);
        this.details = res;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.details = 'Not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }

}
