import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { EmpregadoService } from 'src/app/core/services/empregado.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { IEmpregado } from 'src/app/core/interfaces/empregado';
import { IForm } from 'src/app/core/interfaces/form';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [MessageService],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formGroup: FormGroup<IForm>;

  constructor(
    private empService: EmpregadoService,
    private messageService: MessageService
  ) {
    this.formGroup = new FormGroup<IForm>({
      nome: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      sobrenome: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      idade: new FormControl(null, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      genero: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      telefone: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      endereco: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      salario: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      foto: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  ngOnInit(): void {}

  cadastrarEmpregado() {
    let dadosEmpregado: IEmpregado = this.formGroup.value as IEmpregado;
    const novoUsuario$: Observable<IEmpregado> =
      this.empService.cadastrarEmpregado(dadosEmpregado);

    return novoUsuario$.subscribe(() => this.mensagemCadastro());
  }

  mensagemCadastro() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Cadastrado com sucesso!',
      key: 'toast',
    });
  }
}
