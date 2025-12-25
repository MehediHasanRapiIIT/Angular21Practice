import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, Field, form, required, schema } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-ex',
  imports: [Field, JsonPipe],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {

  loginModel = signal({ email: '', password: '' });

  //loginForm = form(this.loginModel);

  loginForm = form(this.loginModel, (schema)=>{
    required(schema.email, {message: 'Email is required'});
    email(schema.email, {message: 'Invalid email format'});
    required(schema.password,{message: 'Password is required'});
  });


}
