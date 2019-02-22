import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './components/pessoas/pessoa-list/pessoa-list.component';
import { PessoaViewComponent } from './components/pessoas/pessoa-view/pessoa-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full'},
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/:id', component: PessoaViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
