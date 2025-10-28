import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    providers: [provideNativeDateAdapter()]
})
export class AngularMaterialModule { }