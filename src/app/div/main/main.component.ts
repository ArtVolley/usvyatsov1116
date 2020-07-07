import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { MyStudent } from 'src/app/shared/student.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  students;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getData();
  }

  getStudents()
  {
    console.log(this.students);
    return this.students;
  }

  async onEdit(data: MyStudent) {
    try {
      await this.studentService.changeStudent(data);
      this.getData();
    } catch (err) {
      console.error(err);
    } 
  }

  async onDeleteById(data: number) {
    try {
    await this.studentService.deleteStudent(data);
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
