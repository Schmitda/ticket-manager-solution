import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RequireFalseDirective} from '../directives/require-false.directive';
import {StringToBrPipe} from '../pipes/string-to-br.pipe';
import {PhonePipe} from '../pipes/phone.pipe';
import {RandomNumberPipe} from '../pipes/random-number.pipe';
import {ConvertLinkPipe} from '../pipes/convert-link.pipe';
import {MessageComponent} from '../messages/message/message.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    RequireFalseDirective,
    ReactiveFormsModule,
    StringToBrPipe,
    PhonePipe,
    RandomNumberPipe,
    ConvertLinkPipe,
    MessageComponent
  ],
  declarations: [
    RequireFalseDirective,
    StringToBrPipe,
    PhonePipe,
    RandomNumberPipe,
    ConvertLinkPipe,
    MessageComponent
  ],
  providers: [],
})
export class SharedModule {
}
