import { FormControl } from "@angular/forms";

export interface IForm {
    salario: FormControl<string>,
    idade: FormControl<number | null>,
    genero: FormControl<string>,
    nome: FormControl<string>,
    sobrenome: FormControl<string>,
    telefone: FormControl<string>,
    endereco: FormControl<string>,
    foto: FormControl<string>
}
