import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    AvatarModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    AvatarModule,
  ]
})
export class PrimengModule { }
