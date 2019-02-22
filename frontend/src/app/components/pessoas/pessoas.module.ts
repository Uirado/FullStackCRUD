import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [PessoaViewComponent, PessoaListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PessoasModule { }
