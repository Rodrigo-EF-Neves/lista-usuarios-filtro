import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  
  ngOnInit(): void {
      setTimeout(() => {
        this.usersList = UsersList;
      }, 3000);
  }


  onUserSelected(user: IUser): void {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
