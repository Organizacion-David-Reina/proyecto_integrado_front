import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassDialogComponent } from './update-class-dialog.component';

describe('UpdateClassDialogComponent', () => {
  let component: UpdateClassDialogComponent;
  let fixture: ComponentFixture<UpdateClassDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateClassDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
