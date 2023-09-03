import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
})
export class MaterialModule {}
