import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/User/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser): void {
    this.userSelectedEmit.emit(user);
  }
} 
