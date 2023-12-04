import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing de Users", () => {
    let userID;
    let updateUserID;

    describe("metodo GET /api/users", () => {
        // obtener todos los usuarios
        it("Debería obtener todos los usuarios", async () => {
            const { statusCode, body } = await requester.get("/api/users").send();
            expect(statusCode).to.equal(200);
            expect(body).to.have.property("payload");
            expect(body.payload).to.be.an("array");
        });

        // crear un usuario
        it("El endpoint POST /api/users debe crear un producto", async () =>{
            const userMock = {
                first_name: "Roberto",
                last_name: "Rodriguez",
                email: "robert@gmail.com",
                age: 32,
                password: "roberpass22"
            };
            const { statusCode, body } = await requester.post("/api/users").send(userMock);
            userID = body.payload._id;
            expect(statusCode).to.be.equal(200);
            expect(body.payload).to.have.property("_id");
        });

        // actualizar los datos del usuario creado anteriormente
        it("EL endpoint PUT /api/users/:uid deberá actualizar los datos del usuario", async () => {
            const userUpdate = {
                first_name: "Alfredo",
                last_name: "Escalera",
                email: "alfred@gmail.com",
                age: 51,
                password: "abc678"
            };
            const { statusCode } = await requester.put(`/api/users/${userID}`).send(userUpdate);
            updateUserID = body.payload._id;
            expect(statusCode).to.be.equal(200);
        });

        // elimina el usuario actualizado
        it("El endpoint DELETE /api/users/:uid deberá eliminar el usaurio", async () =>{
            const { statusCode } = await requester.delete(`/api/users/${updateUserID}`);
            
            expect(statusCode).to.be.equal(200);
        });
    });
});
