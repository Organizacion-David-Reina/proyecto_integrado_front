import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-delete-class-dialog',
  templateUrl: './delete-class-dialog.component.html',
  styleUrls: ['./delete-class-dialog.component.scss']
})
export class DeleteClassDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteClassDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  classId: number = -1;

  constructor(private _classService: ClassService) {
    this.classId = this.data as number;
  }

  onNoClick(): void {
      this.dialogRef.close(false);
  }

  onDelete(): void {
    this._classService.deleteClass(this.classId).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.dialogRef.close(false);
      }
    });
  }

}
