import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaNewComponent } from './pessoa-new/pessoa-new.component';

@NgModule({
  declarations: [PessoaViewComponent, PessoaListComponent, PessoaNewComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
  ],
  entryComponents: [PessoaNewComponent],
})
export class PessoasModule { }
