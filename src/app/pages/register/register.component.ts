import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  register() {
    const value = this.registerForm.value;
  
    if (this.registerForm.valid) {
      this.auth.register({
        id: uuidv4(),
        userName: value.userName!,
        email: value.email!,
        password: value.password!,
        role: ''
      }).subscribe(
        (response) => {
          alert('Registered Successfully');
          this.router.navigate(['/login']);
        },
        (error) => {
          alert(error.message);
        }
      )
    }
  }

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
}
