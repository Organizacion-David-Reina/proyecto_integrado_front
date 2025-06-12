import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserResponse } from 'src/app/data/data';
import { UserDataDialogComponent } from '../user-data-dialog/user-data-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  openedMenu: string | null = null;
  user: UserResponse ={
    id: -1,
    name: '',
    lastname: '',
    corporateMail: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    role: {
      id: -1,
      rol: ''
    } 
  }

  constructor(private dialog: MatDialog, private router: Router) {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser) as UserResponse;
    }
  }

  toggleMenu(menu: string) {
    if (this.openedMenu === menu) {
      this.openedMenu = null;
    } else {
      this.openedMenu = menu;
    }
  }

  openUserDataDialog(): void {
    const dialogRef = this.dialog.open(UserDataDialogComponent, {
      width: '400px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/users/auth']);
      }
    });
  }
}
