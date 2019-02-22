import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { Pessoa, Escolaridade, getEscolaridadeValues } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-pessoa-view',
  templateUrl: './pessoa-view.component.html',
  styleUrls: ['./pessoa-view.component.scss']
})
export class PessoaViewComponent implements OnInit {

  edit: false;
  showProgressBar: boolean;
  id: number;
  pessoa: Pessoa;
  saving: boolean;

  escolaridadeValues;


  constructor(
    private readonly location: Location,
    private readonly pessoaService: PessoaService,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.showProgressBar = true;
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.pessoaService.get(this.id).subscribe(p => {
        this.pessoa = p;
        this.escolaridadeValues = getEscolaridadeValues();
        this.showProgressBar = false;
      });
    });
  }

  back() {
    this.location.back();
  }

  save() {
    this.saving = true;
    this.pessoaService.save(this.pessoa).subscribe(res => {
      console.log(res);
      this.saving = false;
      this.edit = false;
    });
  }
}
