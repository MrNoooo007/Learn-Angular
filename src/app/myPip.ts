import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'myPipe'
})
export class myPip implements PipeTransform {
  transform(string : string): any {
    return "Hello " + string;
  }

}
