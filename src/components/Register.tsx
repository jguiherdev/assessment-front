import './Register.css';
import React, { useState } from 'react';
import { User } from '../models/User';
import { Button, FormControl, Grid, Input, InputLabel } from '@mui/material';
import { Container } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import { Card, CardContent } from '@mui/material';
import UserList from './UserList';
import { UserService } from '../services/UserService';



const Register = () => {

    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhone] = useState('');
    

    const firstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    const lastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const phoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }
    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            phoneNumber,
            email
            
        }

            UserService.postUser(data)
            .then((data) => {
                console.log(data);
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            })
    

            

            setUser({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
            })

            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            
            

   

    };

    

    return (
       <Container maxWidth="md" sx={{ display: 'inline-flex', justifyContent:'center', alignContent:'center', marginLeft:"12%", marginTop:"2%" }} >
       
                  
        <Card style={{maxWidth: '300px', margin: 'auto', marginTop: '50px', padding: '10px'}}>

        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Grid>
                <h1>Add an user</h1>
            </Grid>
        </Grid>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input id="firstName" type="text" value={firstName} onChange={firstNameChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id="lastName" type="text" value={lastName} onChange={lastNameChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" value={email} onChange={emailChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                                <Input id="phoneNumber" type="text" value={phoneNumber} onChange={phoneChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit" endIcon={<SendIcon />}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>

            </CardContent>
        </Card>

        
        
        <Card style={{margin: 'auto', marginTop: '50px',marginLeft:"2%", padding: '27px'}}>
        <CardContent>
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <small><h1>Users</h1></small>
            </Grid>
            <Grid item xs={12}>
            <UserList onSaveUser={user}
            
            />
            </Grid>
        </Grid>
        </CardContent>
        </Card>
        
       </Container>
    );
}
    

export default Register;