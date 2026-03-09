import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from "date-fns";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  
  ngOnInit(): void {
      setTimeout(() => {
        this.usersList = UsersList;
        this.usersListFiltered = this.usersList;
      }, 1);
  }


  onUserSelected(user: IUser): void {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions): void {
    console.log(filterOptions)

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;
    
    if (NAME_NOT_TYPED)
      return usersList;

    const FILTERED_LIST = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return FILTERED_LIST;
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;
    
    if (STATUS_NOT_SELECTED)
      return usersList;

    const FILTERED_LIST = usersList.filter((user) => user.ativo === status);
    return FILTERED_LIST;
  }

  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED)
      return usersList;

    const CHECK_DATE_INTERVAL = (user: IUser) => isWithinInterval(new Date(user.data_cadastro), {
        start: startDate,
        end: endDate
      });

    const FILTERED_LIST = usersList.filter(CHECK_DATE_INTERVAL);
    
    return FILTERED_LIST;
  }
}
