import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Authentication, User } from '../../interfaces/auth.interface'
import { MESSAGES } from '@shared/utils/messages'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error?: string;
  isLoading?: boolean = false;
  isTextFieldType: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(1), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.form.markAllAsTouched();
    this.error = undefined;

    if (this.form.valid) {
      this.isLoading = true;
      this.authService.login(this.form.value)
        .then((res) => {
          let auth: Authentication = res;

          this.authService.me(auth).then((resUser) => {
            let user: User = resUser;
            this.authService.store(auth, user);
            this.router.navigate(['/']);
          })

        })
        .catch((err) => {
          console.log(err);
          let message = err.error?.error || MESSAGES.ERROR;
          this.error = message;
          this.isLoading = false;
        });
    }
  }
}
