import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyStudent } from 'src/app/shared/student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-editform-students',
  templateUrl: './editform-students.component.html',
  styleUrls: ['./editform-students.component.css']
})
export class EditformStudentsComponent implements OnInit {

  id: number;
  buttonEnabled = false;
  groups = this.studentService.getGroups();
  directions = this.studentService.getDirections();
  students;
  // student: MyStudent;

  @Input() student: MyStudent;
  editForm: FormGroup;
  @Output() editStudent = new EventEmitter<MyStudent>();

  public phoneMask = ['+', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,];
  public dateMask = [/\d/, /\d/, '.',  /\d/, /\d/, '.',  /\d/, /\d/, /\d/, /\d/,];

  constructor(
    // private activatedRouter: ActivatedRoute,
    private studentService : StudentService,
    // private router: Router
    ) { 
      // this.activatedRouter.params.subscribe((param) => {
      //   this.id = param.id;});
    
  }

  
  ngOnInit(): void {
    let checkNum = /^[+,0-9]+$/;
    this.editForm = new FormGroup
    ({
      surname: new FormControl('',[Validators.required,]),
      name: new FormControl('',[Validators.required,]),
      patronymic: new FormControl('',[Validators.required,]),
      phone: new FormControl('',[Validators.pattern(checkNum), Validators.required,]),
      email: new FormControl('',[ Validators.email, Validators.required,]),
      birthdate: new FormControl('',[ Validators.required,]),
      selectGroup: new FormControl(),
      selectDirection: new FormControl(),
    });
    
    this.editForm.patchValue({
      name: this.student.name,
      surname: this.student.surname,
      patronymic: this.student.patronymic,
      phone: this.student.phone,
      email: this.student.email,
      birthdate: this.student.birthdate,
      group: this.student.group,
      direction: this.student.direction,
      
    });
  }

  async onEditStudent() {
    // if (!isNullOrUndefined(this.id)) {
    //   try {
    //     await this.studentService.putStudentById(this.id, this.editForm.value);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // } else {
    //   try {
    //     let res = await this.studentService.postStudent(this.editForm.value);
    //     this.router.navigate([this.router.url, res.id]);
    //     this.getData();
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    this.editStudent.emit({
      id: this.student.id,
      name: this.editForm.value.name,
      surname: this.editForm.value.surname,
      patronymic: this.editForm.value.patronymic,
      phone: this.editForm.value.phone,
      email: this.editForm.value.email,
      birthdate: this.editForm.value.birthdate,
      group: this.editForm.value.selectGroup.group,
      direction: this.editForm.value.selectDirection.direction,
    });
    console.log(this.editForm.value);
  }  


  // async onDelete() {
  //   try {
  //     //console.log(user)
  //     await this.studentService.deleteStudent(this.student.id);

  //   } catch (err) {
  //     console.error(err);
  //   }finally{
  //     this.getData();
  //   }
  
  // }

  async getData() {
    // if (!isNullOrUndefined(this.id)) {
    //   try {
    //     let student = this.studentService.getStudentById(this.id);
    //     this.student = await student;
    //   } catch (err) {
    //     console.error(err);
    //   }
    //   this.editForm.patchValue({
    //     name: this.student.name,
    //     surname: this.student.surname,
    //     birthdate: this.student.birthdate,
    //     direction:this.student.direction,
    //     phone:this.student.phone,
    //     email:this.student.email,
    //     patronymic:this.student.patronymic,
    //     group:this.student.group,
    //   });
    // }
    try {
      this.students = await this.studentService.getStudent();
    } catch (err) {
      console.error(err);
    }
  }

}
