import { Container } from '@mui/system';
import { User } from '../models/User';
import { Button, FormControl, Grid, Input, InputLabel } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import { Console } from 'console';
import { UserService } from '../services/UserService';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const UserList = () => {

    //get a list of users from the server
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        UserService.getUsers().then((response) => {
            setUsers(response);
        })
    }
        , []);

        console.log(users);

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
            

   







    
   
