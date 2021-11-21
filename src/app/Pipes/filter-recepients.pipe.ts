import { Pipe, PipeTransform } from '@angular/core';
import { Recepient } from '../recepients';
@Pipe({
  name: 'filterRecepients'
})
export class FilterRecepientsPipe implements PipeTransform {
  transform(Recepients: Recepient[], filteredString: string): Recepient[] {
    if(!Recepients || !filteredString) {
      return Recepients;
    }
    return Recepients.filter(recepient => recepient.name.toLocaleLowerCase().includes(filteredString.toLocaleLowerCase()) || recepient.email.toLocaleLowerCase().includes(filteredString.toLocaleLowerCase()));
  }
}
