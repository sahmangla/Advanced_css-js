import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grades'
})
export class GradesPipe implements PipeTransform {
  transform(input:number):string{
    var result:string="";
    if(input==1)
   { result="Excellent";
    return result;}
    else if(input==2)
    {
      result="Good";
    return result;
    }
    else if(input==3)
    {
      result="Average";
    return result;
    }
    else if(input==4)
    {
      result="Bad";
    return result;
    }
    else(input==5)
    {
      result="Very Bad";
    return result;
    }
  }


}
