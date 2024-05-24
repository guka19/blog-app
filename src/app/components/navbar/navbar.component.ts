import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: User;

  getUserData() {
    let storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    console.log(this.user);
  };

  logout() {
    this.auth.setLoggedOut();
    this.auth.clearToken();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.getUserData();
  }

  constructor(private auth: AuthService, private router: Router) {}
}
