import { faker } from "@faker-js/faker";

// genera usuarios aleatorios
function generateUsers(){
    return {
        first_name:faker.person.firstName(),
        last_name:faker.person.lastName(),
        email:faker.internet.email(),
        sex:faker.person.sex(),
        bithdate:faker.date.bithdate(),
        phone:faker.phone.number(),
        image:faker.internet.avatar(),
        id:faker.database.mongodbObjectId(),
        role: faker.datatype.boolean() ? "Admin" : "User",
        products,
    };
};
//genera productos aleatorios
function generateProduct(){
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        thumbnails: faker.image.url(),
        code: faker.commerce.isbn(),
        stock: faker.commerce.stock(),
        deparment: faker.commerce.department(),        
        id: faker.database.mongodbObjectId(),
    };
};