import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { getEscolaridadeValues, Escolaridade, Pessoa } from 'src/app/models/pessoa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService, onlyNumbers } from 'src/app/services/pessoa.service';

export const CPF_MASK = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
export const TEL_MASK = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

@Component({
  selector: 'app-pessoa-new',
  templateUrl: './pessoa-new.component.html',
  styleUrls: ['./pessoa-new.component.scss']
})

export class PessoaNewComponent implements OnInit {

  nome: string;
  telefone: string;
  cpf: string;
  escolaridade: Escolaridade;

  form: FormGroup;
  formControls;
  minLengthCpf = 11;
  maxLengthCpf = 11;
  maxLengthTelefone = 15;

  escolaridadeValues;

  showProgressBar = false;

  public cpfMask = CPF_MASK;
  public telMask = TEL_MASK;

  constructor(
    private readonly dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly pessoaService: PessoaService) { }

  ngOnInit() {
    this.escolaridadeValues = getEscolaridadeValues();
    this.createForm();
    this.formControls = this.form.controls;
  }

  close() {
    this.dialog.closeAll();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        nome: [
          '',
          Validators.compose([Validators.required]),
        ],
        cpf: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(this.minLengthCpf),
            Validators.maxLength(this.maxLengthCpf)
          ]),
        ],
        telefone: [
          '',
          Validators.maxLength(this.maxLengthTelefone)
        ],
        escolaridade: [
          ''
        ]
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.showProgressBar = true;
      const pessoa = new Pessoa(this.nome, this.cpf, this.telefone, this.escolaridade);
      this.pessoaService.add(pessoa).subscribe(res => {
        this.showProgressBar = false;
        this.dialog.closeAll();
      }, error => {
        this.showProgressBar = false;
        console.log(error);
        }
      );
    }
  }

  normalizeValue(field) {
    return onlyNumbers(field);
  }
}
