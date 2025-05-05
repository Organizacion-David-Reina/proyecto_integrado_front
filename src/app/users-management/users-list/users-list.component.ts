import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { User } from 'src/app/data/data';
import { UserService } from '../services/users-services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Mail corporativo', 'Nombre completo', 'Rol'];
  userList : User[] = [];
  dataSource = new MatTableDataSource<User>(this.userList);

  constructor(private _userService: UserService, private _route: ActivatedRoute, private _router: Router) {
    this._userService.getAllUsers().subscribe((response) => {
      this.userList = response;
      this.dataSource.data = [...this.userList];
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
