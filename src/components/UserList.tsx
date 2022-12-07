import { User } from '../models/User';
import { useState, useEffect } from 'react';
import { UserService } from '../services/UserService';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const UserList = (user:any) => {



    const [userAdded, setUserAdded] = useState<User[]>([]);

    
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        UserService.getUsers().then((data) => {
            setUsers(data);
            setUserAdded(user)
        })
    }, [user, userAdded]);


   if(users.length === 0) {
       return <div>User list is empty...</div>
    }
    else{
        return (
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.firstName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
    
                </Table>
            </TableContainer>
        )

    }
                          
}


export default UserList;
            

   







    
   
