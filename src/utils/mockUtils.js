import { faker } from "@faker-js/faker";

// Genera usuarios aleatorios
function generateUsers() {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        sex: faker.person.sex(),
        birthdate: faker.date.birthdate(),
        password: faker.password.passwordNumber(),
        image: faker.internet.avatar(),
        id: faker.database.mongodbObjectId(),
        role: faker.datatype.boolean() ? "Admin" : "User",
        products: generateProduct(), // Deberías llamar a la función generateProduct para obtener productos aleatorios
    };
}

// Genera productos aleatorios
function generateProduct() {
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        thumbnails: faker.image.imageUrl(), // Cambiado a faker.image.imageUrl()
        code: faker.commerce.product(), // Cambiado a faker.commerce.product()
        stock: faker.datatype.number(), // Cambiado a faker.datatype.number()
        department: faker.commerce.department(),
        id: faker.database.mongodbObjectId(),
    };
}

export { generateUsers, generateProduct };
