import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStudentsComponent } from './filter-students.component';

describe('FilterStudentsComponent', () => {
  let component: FilterStudentsComponent;
  let fixture: ComponentFixture<FilterStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
