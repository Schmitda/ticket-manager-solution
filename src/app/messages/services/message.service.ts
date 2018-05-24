import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  public messages: {
    title: string,
    body: string
  }[] = [];

  constructor() {
  }


  public getMessage() {
    return this.messages.slice(0,1).pop();
  }

  public setMessage(title: string, body: string, duration: number = 5000) {
    this.messages.push(
      {
        body: body,
        title: title
      }
    );
    setTimeout(() => {
      this.messages = this.messages.slice(1);
    }, duration);
  }

}
