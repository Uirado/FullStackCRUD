import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa, Escolaridade } from 'src/app/models/pessoa.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PessoaNewComponent } from '../pessoa-new/pessoa-new.component';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  private pessoas: Pessoa[];
  private showProgressBar: boolean;

  constructor(
    private readonly pessoaService: PessoaService,
    private readonly router: Router,
    private readonly dialog: MatDialog) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.showProgressBar = true;
    this.pessoaService.getAll().subscribe(list => {
      this.pessoas = list;
      this.showProgressBar = false;
    });
  }

  delete(pessoa: Pessoa): void {
    this.showProgressBar = true;
    this.pessoaService.delete(pessoa.id).subscribe(_ => {
      this.pessoas.splice(this.pessoas.indexOf(pessoa), 1);
      this.getList();
    });
  }

  newPessoaDialog() {
    const dialogRef = this.dialog.open(PessoaNewComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(_ => {
      this.getList();
    });
  }

}
