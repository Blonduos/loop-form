import { Component, OnInit, Input } from '@angular/core';
import { recepients, Recepient } from '../../recepients';
import { RecepientService } from '../../services/recepient.service';

@Component({
  selector: 'app-recepients',
  templateUrl: './recepients.component.html',
  styleUrls: ['./recepients.component.scss']
})
export class RecepientsComponent implements OnInit {
  recepients = recepients;
  recepient: Recepient | undefined;
  @Input() filteredString:string = '';
  constructor(private recepientService: RecepientService){}

  ngOnInit(){}

  addRecepient(recepient: Recepient) {
    this.recepientService.addRecepient(recepient);
  }
}
