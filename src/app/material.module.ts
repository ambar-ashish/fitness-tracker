import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatIconModule, 
  			MatFormFieldModule, MatInputModule, 
  			BrowserAnimationsModule, MatDatepickerModule,
  			MatNativeDateModule, MatCheckboxModule],
  exports: [MatButtonModule, MatIconModule, 
  			MatFormFieldModule, MatInputModule, 
  			BrowserAnimationsModule, MatDatepickerModule,
  			MatNativeDateModule, MatCheckboxModule]
})
export class MaterialModule{

}