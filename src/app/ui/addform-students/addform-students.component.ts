import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyStudent } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/services/student.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addform-students',
  templateUrl: './addform-students.component.html',
  styleUrls: ['./addform-students.component.css']
})
export class AddformStudentsComponent implements OnInit {

  buttonEnabled = false;
  groups = this.studentService.getGroups();
  directions = this.studentService.getDirections();

  addForm: FormGroup;
  @Output() addStudent = new EventEmitter<MyStudent>();

  public phoneMask = ['+', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,];
  public dateMask = [/\d/, /\d/, '.',  /\d/, /\d/, '.',  /\d/, /\d/, /\d/, /\d/,];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void 
  {
    
    let checkNum = /^[+,0-9]+$/;
    
    
    this.addForm = new FormGroup
    ({
      surname: new FormControl('',[Validators.required,]),
      name: new FormControl('',[Validators.required,]),
      patronymic: new FormControl('',[Validators.required,]),
      phone: new FormControl('',[Validators.pattern(checkNum), Validators.required,]),
      email: new FormControl('',[ Validators.email, Validators.required,]),
      birthdate: new FormControl('',[Validators.required,]),
      selectGroup: new FormControl(this.groups[0]),
      selectDirection: new FormControl(this.directions[0]),
      
      
    });
  }

  async onAddStudent() {
    try { 
      await this.studentService.addStudent({
            surname: this.addForm.value.surname,
            name: this.addForm.value.name,
            patronymic: this.addForm.value.patronymic,
            phone: this.addForm.value.phone,
            email: this.addForm.value.email,
            birthdate: this.addForm.value.birthdate,
            group: this.addForm.value.selectGroup.group,
            direction: this.addForm.value.selectDirection.direction,
          });
          alert("Сотрудник добавлен");
      
    } catch (err) {
      console.error(err);
    } 
  }
}
