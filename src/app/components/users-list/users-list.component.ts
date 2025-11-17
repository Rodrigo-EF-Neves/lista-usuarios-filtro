import { Component } from '@angular/core';
import { IUser } from '../../interfaces/User/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  usersList: IUser[] = UsersList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  onUserSelected(user: IUser): void {
    console.log('Usuário selecionado:', user.nome);
  }
} 
