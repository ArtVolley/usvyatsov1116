import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformStudentsComponent } from './editform-students.component';

describe('EditformStudentsComponent', () => {
  let component: EditformStudentsComponent;
  let fixture: ComponentFixture<EditformStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
