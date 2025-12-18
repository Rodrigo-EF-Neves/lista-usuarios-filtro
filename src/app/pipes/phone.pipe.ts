import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11;
    if (INVALID_PHONE) 
      return "Telefone indisponível ou inválido"

    const CELLPHONE = phone.length == 11;
    const DDD = phone.substring(0, 2);

    if (CELLPHONE) 
      return `(${DDD}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    else
      return `(${DDD}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
  }

}
