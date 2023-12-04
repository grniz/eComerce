import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing de products", () => {
    describe("Test agregar producto", () => {
        it("El endpoint POST /api/products debe crear un producto", async () => {

            const productMock = {
                title: "Sombrero",
                description: "cubre la cabeza",
                price: 233,
                thumbnails: "url",
                code: "mog123",
                stock: 232,
                category: "vestimenta"
            };

            const { statusCode, ok, body } = await requester.post("/api/products").send(productMock);

            expect(body.payload).to.have.property("_id");
        });
    });
});
