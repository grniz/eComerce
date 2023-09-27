export default class ContactDTO{
    constructor(contact){
        this. fullName = contact.first_name +""+contact.last_name;
        this.email = contact.email;
        this.age = contact.age;
        this.password = contact.password;
    }
}