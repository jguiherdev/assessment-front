//a service to fetch the user data from the server

import { User } from '../models/User';
import { Console } from 'console';
import { get } from 'http';

export const UserService = {
    getUsers: async () => {
        const response = await fetch('http://localhost:8080/users/all');
        const data = await response.json();
        return data;
    }
    

}