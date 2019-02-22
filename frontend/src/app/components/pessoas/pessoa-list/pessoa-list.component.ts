import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa, Escolaridade } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  private pessoas: Pessoa[];
  private showProgressBar: boolean;

  constructor(private readonly pessoaService: PessoaService) { }

  ngOnInit() {
    this.showProgressBar = true;
    this.getList();
  }

  getList(): void {
    this.pessoaService.getAll().subscribe(list => {
      this.pessoas = list;
      this.showProgressBar = false;
    });
  }

  delete(event: Event, pessoa: Pessoa): void {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.pessoaService.delete(pessoa.id).subscribe(_ => {
      this.pessoas.splice(this.pessoas.indexOf(pessoa), 1);
      this.getList();
    });
  }

  fakeAdd() {
    const novo = new Pessoa('Uirá', '12312312312', '1231231231', Escolaridade.SUPERIOR_COMPLETO);
    this.pessoaService.add(novo).subscribe(res => {
      console.log(res);
      this.getList();
    });
  }

}