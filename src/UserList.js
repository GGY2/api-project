import React from 'react';
import './UserList.css';
import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {

    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.data)
            .then((data) => {
                setListOfUsers(data);
            })
            .catch((error) => {
                console.log(error);
            })        
    }, []);

    return(
        <>
        <div style={{
            backgroundColor: '#ffff', 
            padding: '30px', 
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            borderRadius: '8px',
            width: '800px',
            minHeight: '100px',
            overflow: 'auto',
            margin: '0px auto 0px',
        }}>
        <table style={{width: '100%'}}>
            <tr >
                <th>Name</th>
                <th>Email</th>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
            </tr>
            {listOfUsers.map((person) => {
            return(
                <>
                    <tr>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>{person.address.street}</td>
                        <td>{person.address.suite}</td>
                        <td>{person.address.city}</td>
                    </tr>
                </>
            )
            })
            }
        </table>
        </div>
        {/* <ul>
            {
            listOfUsers.map((person) => {
                return(
                    <li key={person.id}>{person.name}</li>
            )
            })
            }
        </ul> */}
        </>
    )
}

export default UserList;
