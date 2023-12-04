export const generateUserErrorInfo = (user) =>{
    return `One o more propieties were incomplete or not valid.
    List of required propieties:
    *first_name: need to be a String, received ${user.first_name}
    *last_name: need to be a String, received ${user.last_name}
    *email: need to be a String, received ${user.email}
    *age: need to be a Number, received ${user.age}
    *password:need to be a String, received ${user.password}`;
}