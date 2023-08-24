import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmpregadoService } from 'src/app/core/services/empregado.service';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


import { Observable, catchError, of, switchMap, tap, throwError  } from 'rxjs';
import { MessageService } from 'primeng/api';
import { IEmpregado } from 'src/app/core/interfaces/empregado';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, CardModule, ButtonModule, ToastModule, MessagesModule, MessageModule],
  providers:[MessageService],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private empService: EmpregadoService, private messageService: MessageService) { 

    this.formGroup = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      sobrenome: this.fb.control('', [Validators.required]),
      idade: this.fb.control('', [Validators.required]),
      genero: this.fb.control('', [Validators.required]),
      telefone: this.fb.control('', [Validators.required]),
      endereco: this.fb.control('', [Validators.required]),
      salario: this.fb.control('', [Validators.required]) 
    });
  }

  ngOnInit(): void {
  }

  cadastrarEmpregado() {

    console.log('clicou')
    let dadosEmpregado: IEmpregado = this.formGroup.value;

    let novoUsuario$:Observable<IEmpregado> = this.empService.cadastrarEmpregado(dadosEmpregado).pipe(
      switchMap (response => of (response)),
      catchError((err) => throwError(() => console.log(err)))
    );
    console.log('voltou')
    return novoUsuario$;
  }

  mensagemCadastro() {
    this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Cadastrado com sucesso!', key: 'toast'});
  }

}
