import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

 transform(input:any[],low:number,high:number):any[]
 {
  var result:any[]=input.filter((item)=>item.sal>low&&item.sal<high
 )
  return result;
 }
}


