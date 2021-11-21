import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recepient} from '../recepients';

@Injectable({
  providedIn: 'root'
})
export class RecepientService {
  private showRecepientList: boolean = false;
  private subject = new Subject<any>();
  recepients: Recepient[] = []

  constructor() { }
  // toggle the value for when the list of recepients will appear
  toggleshowRecepients(): void {
    this.showRecepientList = !this.showRecepientList;
    this.subject.next(this.showRecepientList);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  addRecepient(recepient: Recepient) {
    if (this.recepients.indexOf(recepient) !== -1) {
      return
    } else {
      this.recepients.push(recepient);
    }
  }

  getRecepients() {
    return this.recepients;
  }
}
