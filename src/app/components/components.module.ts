import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
    declarations: [
    UserDetailsComponent,
    FilterComponent,
    UserTableComponent
  ],
    imports: [
      CommonModule,
      AngularMaterialModule,
      FormsModule
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      FormsModule,
      UserTableComponent
    ]
})
export class ComponentsModule { }
