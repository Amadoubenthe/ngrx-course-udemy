import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { login } from './auth.actions';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, action) => {
    return {
      user: action.user,
    };
  })
);
