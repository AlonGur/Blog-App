import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postTitle'
})
export class PostTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var myArr=value.split(' ')
    var myArr=myArr.filter(word=> word!='-')
    var newStr=myArr.join('-')
    return newStr;
  }

}
