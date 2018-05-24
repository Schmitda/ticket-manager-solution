import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertLink'
})
export class ConvertLinkPipe implements PipeTransform {
  transform(value: any, config: {
    http: boolean,
    sftp: boolean,
    https: boolean,
    ftp: boolean
  } = {
    http: true,
    https: true,
    sftp: true,
    ftp: true
  }): any {
    if (typeof value === 'string') {
      if (config.https) {
        const replaceHttps = /(\b(https):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        value = value.replace(replaceHttps, '<a href="$1" target="_blank">$1</a>');
      }
      if (config.http) {
        const replaceHttp = /(\b(http):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        value = value.replace(replaceHttp, '<a href="$1" target="_blank">$1</a>');
      }
      if (config.sftp) {
        const replaceSftp = /(\b(sftp?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        value = value.replace(replaceSftp, '<a href="$1" target="_blank">$1</a>');
      }
      if (config.ftp) {
        const replaceFtp = /(\b(ftp?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        value = value.replace(replaceFtp, '<a href="$1" target="_blank">$1</a>');
      }
      return value;
    } else {
      console.warn('Tried to convert non string to url ' + value);
      return value;
    }
  }
}
