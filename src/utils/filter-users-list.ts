import { isWithinInterval } from "date-fns";
import { IUser } from "../app/interfaces/User/user.interface";
import { IFilterOptions } from "../app/interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined || name.trim() === '';

    if (NAME_NOT_TYPED)
        return usersList;

    const FILTERED_LIST = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return FILTERED_LIST;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED)
        return usersList;

    const FILTERED_LIST = usersList.filter((user) => user.ativo === status);
    return FILTERED_LIST;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = (startDate === undefined || endDate === undefined) || (startDate === null || endDate === null);

    if (DATES_NOT_SELECTED)
        return usersList;

    const CHECK_DATE_INTERVAL = (user: IUser) => isWithinInterval(new Date(user.data_cadastro), {
        start: startDate,
        end: endDate
    });

    const FILTERED_LIST = usersList.filter(CHECK_DATE_INTERVAL);

    return FILTERED_LIST;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}

export { filterUsersList };