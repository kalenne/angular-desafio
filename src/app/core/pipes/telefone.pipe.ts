import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(numero: string): string {
    if(!numero) {
      return numero;
    }
    numero = numero.replace(/\D/g, '');

    if(numero.length === 11) {
      return `(${numero.substring(0,2)}) ${numero.substr(2,5)}-${numero.substr(7,4)}`;
    }
    return numero;
  }

}
