import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataDialogComponent } from './user-data-dialog.component';

describe('UserDataDialogComponent', () => {
  let component: UserDataDialogComponent;
  let fixture: ComponentFixture<UserDataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataDialogComponent]
    });
    fixture = TestBed.createComponent(UserDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
