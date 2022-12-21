import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { login } from '../store/auth.actions';
import { AuthState } from '../store/auth.reducer';
import { EMPTY } from 'rxjs';
import { AuthActions } from '../store/action-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }
  ngOnInit() {}
  login() {
    const val = this.form.value;

    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          console.log('Mon User', user);
          this.store.dispatch(login({ user }));
          this.router.navigateByUrl('/courses');
        })
      )
      .subscribe(() => {
        return EMPTY;
      });
  }
}
