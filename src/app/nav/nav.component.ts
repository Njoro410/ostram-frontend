import {Component, OnInit} from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.http.post('https://ostram.herokuapp.com/api/logout/', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}
