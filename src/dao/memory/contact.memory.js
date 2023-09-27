export default class Contacts {
    constructor (){
        this.data = [];
    }
    get = async ()=>{
        return this.data
    }
    create = async (contacto)=>{
        contacto._id = this.data.length+1;
        this.data.push(contacto);
        return contacto;
    };
    modify = async (id, contacto) =>{
        const index = this.data.findIndex(value => value._id === +id)
        if(index === -1){
            return null;
        }else {
            this.data[index] = contacto
            return contacto
        }
    }
    delete = async (id) =>{
        const index = this.data.findIndex(value => value._id === id);
        if(index === -1){
            return null;
        }else {
            let contacto = this.data[index];
            this.data.splice(index, 1);
            return contacto;
        }
    }
}