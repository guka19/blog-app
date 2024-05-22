import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  errorMessage = '';

  login() {
    const value = this.loginForm.value;

    this.auth.login({
      email: value.email!,
      password: value.password!
    }).subscribe(
      (response: any) => {
        const { accessToken, user} = response;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        this.auth.setLoggedIn();

        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    )
  }

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
}
