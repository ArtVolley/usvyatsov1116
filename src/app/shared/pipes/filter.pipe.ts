import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any, filterName: string) {
    if (students.filter((student) => (student.group  + ' ' + student.direction).toLowerCase() === filterName.toLowerCase() )){
      return students.filter((student) => (student.group + ' ' + student.direction).toLowerCase()  === filterName.toLowerCase() );
    }else{
      return 0;
    }
  }

}
