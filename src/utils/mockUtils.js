import { faker } from "@faker-js/faker";

// Genera usuarios aleatorios
function generateUsers() {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
        password: faker.password.passwordNumber(),
        image: faker.internet.avatar(),
        id: faker.database.mongodbObjectId(),
        role: faker.datatype.boolean() ? "Admin" : "User",
        products: generateProduct(),
    };
}

// Genera productos aleatorios
function generateProduct() {
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        thumbnails: faker.image.imageUrl(), 
        code: faker.commerce.product(),
        stock: faker.datatype.number(),
        category: faker.commerce.department(),
        id: faker.database.mongodbObjectId(),
    };
}

export { generateUsers, generateProduct };
