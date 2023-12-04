import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing de productos", () => {
    let productID;
    let updateProductID;

    describe("metodo GET /api/products", () => {
        // obtener todos los productos
        it("Debería obtener todos los productos", async () => {
            const { statusCode, body } = await requester.get("/api/products").send();
            expect(statusCode).to.equal(200);
            expect(body).to.have.property("payload");
            expect(body.payload).to.be.an("array");
        });

        // crear un producto
        it("El endpoint POST /api/products debe crear un producto", async () =>{
            const productMock = {
                title: "Remo",
                description: "Propulsa el barco",
                price: 23,
                thumbnails: "url",
                code: "rem123",
                stock: 232,
                category: "navegacion"
            };
            const { statusCode, body } = await requester.post("/api/products").send(productMock);
            productID = body.payload._id;
            expect(statusCode).to.be.equal(200);
            expect(body.payload).to.have.property("_id");
        });

        // actualizar el anterior producto creado
        it("EL endpoint PUT /api/products/:pid deberá actualizar el producto", async () => {
            const productUpdate = {
                title: "Ancla",
                description: "Detiene el barco",
                price: 78,
                thumbnails: "url",
                code: "anc52",
                stock: 24,
                category: "navegacion"
            };
            const { statusCode } = await requester.put(`/api/products/${productID}`).send(productUpdate);
            updateProductID = body.payload._id;
            expect(statusCode).to.be.equal(200);
        });

        // elimina el producto actualizado
        it("El endpoint DELETE /api/products/:pid deberá eliminar el producto", async () =>{
            const { statusCode } = await requester.delete(`/api/products/${updateProductID}`);
            expect(statusCode).to.be.equal(200);
        });
    });
});
