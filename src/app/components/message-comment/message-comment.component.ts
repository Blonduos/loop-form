import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecepientService } from 'src/app/services/recepient.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-comment',
  templateUrl: './message-comment.component.html',
  styleUrls: ['./message-comment.component.scss']
})
export class MessageCommentComponent implements OnInit {
  showSentRecepientList!: boolean;
  recepients = this.recepientService.getRecepients();
  sharedMessage = '';

  shareMessageForm = this.formBuilder.group({
    message: ''
  });

  constructor(
    private recepientService: RecepientService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  shareMessage() {
    if (this.recepients.length > 0) {
      this.showSentRecepientList = true;
      this.sharedMessage = this.shareMessageForm.value.message;
    }
      
    else {
      alert('Please select recepients');
    }
  }
}
