import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecepientService } from '../../services/recepient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recepient-input',
  templateUrl: './recepient-input.component.html',
  styleUrls: ['./recepient-input.component.scss']
})
export class RecepientInputComponent implements OnInit {
  showSentRecepientList!: boolean;
  subscription!: Subscription;
  recepients = this.recepientService.getRecepients();
  filteredString:string = '';
  
  @Input() placeholder!: string;
  @Output() inputClick = new EventEmitter();

  constructor(
    private recepientService: RecepientService
  ) { 
    this.subscription = this.recepientService
    .onToggle()
    .subscribe((value) => (this.showSentRecepientList = value));
  }

  ngOnInit(): void {
  }

  toggleFocus() {
    this.inputClick.emit();
  }
}
