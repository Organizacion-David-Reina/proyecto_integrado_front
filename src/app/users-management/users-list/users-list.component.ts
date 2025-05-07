import { AfterViewInit, Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { User, UserResponse } from 'src/app/data/data';
import { UserService } from '../services/users-services/user.service';
import { roles } from 'src/app/data/data';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/utils/snack-bar/snack-bar.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Mail corporativo', 'Nombre completo', 'Rol'];
  userList : UserResponse[] = [];
  user: UserResponse = {
    id: -1,
    name: '',
    lastname: '',
    corporateMail: '',
    role: {
      id: -1,
      rol: ''}
  };
  dataSource = new MatTableDataSource<User>(this.userList);
  roles = roles.filter(r => r.rol !== 'Director');
  selectedRoleId: number | null = null;
  private _snackBar = inject(MatSnackBar);

  constructor(private _userService: UserService, private _route: ActivatedRoute, private _router: Router,
    private dialog: MatDialog) {
    this._userService.getAllUsers().subscribe((response) => {
      this.userList = response;
      this.dataSource.data = [...this.userList];
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilters() {
    const emailFilter = this.user.corporateMail?.toLowerCase() || '';
  
    this.dataSource.data = this.userList.filter(user =>
      user.corporateMail.toLowerCase().includes(emailFilter) &&
      (this.selectedRoleId === null || user.role.id === this.selectedRoleId)
    );
  }
  
  
  openDialog(user: UserResponse): void {
    const dialogRef = this.dialog.open(UpdateUserDialogComponent, {
      width: '400px',
      data: user
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._userService.getAllUsers().subscribe((response) => {
          this.userList = response;
          this.dataSource.data = [...this.userList];
        });
    
        this._snackBar.openFromComponent(SnackBarComponent, {
          data: 'Usuario actualizado correctamente',
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
    
  }
  
}
