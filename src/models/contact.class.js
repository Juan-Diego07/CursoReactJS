export class Contact {
    name = '';
    lastName = '';
    mail = '';
    isOnline = false;

    constructor(name,lastName,mail,isOnline){
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.isOnline =isOnline
    }
}