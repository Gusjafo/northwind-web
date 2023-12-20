import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, IAuthStatus } from '../auth/auth.service';
import { Router } from '@angular/router';
import { WhiteSpaceValidator } from '../shared/validators/whiteSpaceValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  isVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          WhiteSpaceValidator.cannotContainSpace
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  onSubmit() {
    this.isVisible = true;
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (authResponse: IAuthStatus) => {
            this.isVisible = false;
            this.router.navigate(['/home']);
          },
          error: (err: any) => {
            this.loginError = err;
            console.log(err.message);
          },
        });
    }
  }
}
