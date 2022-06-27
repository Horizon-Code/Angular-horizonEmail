import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';




@NgModule({
  declarations: [
    ModalComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalComponent,
    InputComponent
  ]
})
export class SharedModule { }
