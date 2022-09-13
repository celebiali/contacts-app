import {useState,useEffect} from 'react';
import Lists from "../Lists";
import Form from "../Form";
import "./style.css"
function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullname: "Ali",
            phone_number: "123123"
        },
        {
            fullname: "Mehmet",
            phone_number: "128514"
        },
        {
            fullname: "Ahmet",
            phone_number: "783158"
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    },[contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <Lists contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    );
}

export default Contacts;