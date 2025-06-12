import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherDialogComponent } from './update-teacher-dialog.component';

describe('UpdateTeacherDialogComponent', () => {
  let component: UpdateTeacherDialogComponent;
  let fixture: ComponentFixture<UpdateTeacherDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeacherDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateTeacherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
