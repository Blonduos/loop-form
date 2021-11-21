import { Component, OnInit } from '@angular/core';
import { RecepientService } from '../../services/recepient.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  showRecepientList!: boolean;
  subscription!: Subscription;

  // to use a service you have to add it to the constructor
  constructor(private recepientService: RecepientService) { 
    //setting up a subscription, to watch the showRecepients once it's fired off
    this.subscription = this.recepientService
    .onToggle()
    .subscribe((value) => (this.showRecepientList = value));
  }

  ngOnInit(): void {
  }

  // when we click we call the toglle show recepients
  showRecepients() {
    this.recepientService.toggleshowRecepients();
  }
}
