import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SignupComponent } from './components/auth/signup/signup.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
