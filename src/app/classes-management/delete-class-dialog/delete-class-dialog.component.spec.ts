import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassDialogComponent } from './delete-class-dialog.component';

describe('DeleteClassDialogComponent', () => {
  let component: DeleteClassDialogComponent;
  let fixture: ComponentFixture<DeleteClassDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteClassDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
