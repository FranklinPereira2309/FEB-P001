import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {
  
  dados: string = 'angular';

  transform(value: string, ...args: string[]): any {

    // if(value == 'angular') {
    //   this.dados = 'angular';
    // }else if(value == 'itabuna') {
    //   this.dados = 'itabuna';
    // }else if(value == 'ilheus') {
    //   this.dados = 'ilheus';
    // }else {
    //   this.dados = '';
    // }
    
    return value.replace(`${this.dados}`, `<strong>${value}</strong>`).toLocaleLowerCase();

}

}
