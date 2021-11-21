import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RecepientInputComponent } from './components/recepient-input/recepient-input.component';
import { MessageComponent } from './components/message/message.component';
import { MessageCommentComponent } from './components/message-comment/message-comment.component';
import { RecepientsComponent } from './components/recepients/recepients.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterRecepientsPipe } from './Pipes/filter-recepients.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RecepientInputComponent,
    MessageComponent,
    MessageCommentComponent,
    RecepientsComponent,
    ButtonComponent,
    FilterRecepientsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
