import { Component } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  dataSource: IUser[] = UsersList;

  onUserSelected(user: IUser) {
    console.log('usuário', user);
  }
}
