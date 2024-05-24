import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.auth.setLoggedIn();
    }
  }

  constructor(private auth: AuthService) {}
}
