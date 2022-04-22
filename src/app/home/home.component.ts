import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://ostram.herokuapp.com/api/user/',{withCredentials:true}).subscribe(
      res => {
        console.log(res);
        this.message = res;
        Emitters.authEmitter.emit(true);
      }
    );
  }

}
