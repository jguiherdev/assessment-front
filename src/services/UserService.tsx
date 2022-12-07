import { User } from '../models/User';

export const UserService = {
    getUsers: async () => {
        const response = await fetch('http://localhost:8080/users/all');
        const data = await response.json();
        return data;
    },

    postUser: async (user: User) => {
        const response = await fetch('http://localhost:8080/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        return data;
    }
    

}