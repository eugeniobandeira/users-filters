import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
      MatListModule,
      MatDividerModule,
      MatInputModule,
      MatFormFieldModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule
    ],
    exports: [
      MatListModule,
      MatDividerModule,
      MatInputModule,
      MatFormFieldModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule
    ],
})
export class AngularMaterialModule { }
