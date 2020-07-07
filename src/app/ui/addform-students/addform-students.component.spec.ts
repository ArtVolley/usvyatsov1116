import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformStudentsComponent } from './addform-students.component';

describe('AddformStudentsComponent', () => {
  let component: AddformStudentsComponent;
  let fixture: ComponentFixture<AddformStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
