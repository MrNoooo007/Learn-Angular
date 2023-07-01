import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(address: string): string {
    return "Handle " + address;
  }

}
