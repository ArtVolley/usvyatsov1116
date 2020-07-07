import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyStudent } from 'src/app/shared/student.model';

@Component({
  selector: 'app-filter-students',
  templateUrl: './filter-students.component.html',
  styleUrls: ['./filter-students.component.css']
})
export class FilterStudentsComponent implements OnInit {

  groups = this.studentService.getGroups();
  directions = this.studentService.getDirections();
  students;
  filterName: string;
  filteringName: string;

  constructor(private studentService: StudentService) { }

  filterForm: FormGroup;
  
  ngOnInit(): void {
    this.getData();
    this.filterForm = new FormGroup
    ({
      filterName: new FormControl('',[Validators.required,]),
    });
  }

  getStudents(){
    return this.students;
  }

  onFilterStudent()
  {
    this.getData();
    this.filteringName = this.filterForm.value.filterName;
  }

  async onDeleteById(data:number) {
    try {
    await this.studentService.deleteStudent(data);
    this.getData();
    } catch (err) {
      console.error(err);
    } 
  }



  async onEdit(data: MyStudent) {
    try {
      await this.studentService.changeStudent(data);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }


  async getData() {
    try {
      this.students = await this.studentService.getStudent();
    } catch (err) {
      console.error(err);
    }
  }


}
