import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

    const defaultContact = new Contact('Juan Diego','Prendas','Prendas@gmail.com',true)

    return (
        <div>
            <div>
            Your Contacts:
            <ContactComponent contact={defaultContact}> </ContactComponent>
            </div>
        </div>
    );
}

export default ContactList;
