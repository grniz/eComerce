import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import * as dotenv from "dotenv";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import cookieParser from "cookie-parser";
import __dirname from "./utils.js"
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

import addLogger from "./middleware/logger.middleware.js";

// rutas 
import productsRouter from "./routes/products.router.js";
import cartProductRouter from "./routes/cartProduct.router.js";
import cartRouter from "./routes/carts.router.js";
import sessionRouter from "./routes/sessions.router.js";
import loginRouter from "./routes/login.router.js";
import signupRouter from "./routes/signup.router.js";
import forgotRouter from "./routes/forgot.router.js";
import usersRouter from "./routes/user.router.js"
import mockingProducts from "./routes/mokingProducts.router.js";

import errorHandler from "./middleware/errors/index.js";
import nodemailer from "nodemailer";



dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY;
const app = express();
app.use(cookieParser(SECRET_KEY));

const SwaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Ecomerce Coderhouse",
      description: "Proyecto final coderhouse 2023",
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
};

//conectamos Swagger
const specs = swaggerJsdoc(SwaggerOptions);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(addLogger);
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

const user = process.env.USER_MAIL;
const password = process.env.PASS_MAIL;

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth:{
    user:user,
    pass:password,
  }
})
app.get("/mail", async (req,res) =>{
  let result = await transport.sendMail({
    from: "eComerse user <ecomers@coder.com>",
    to: "usario@gmail.com",
    subject: "correo de usuario",
    html: `
      <div style={color:blue}>
        <h1>correo enviado</h1>
      </div>`,
    attachments: [],
  });
  
  res.json({
    message:"correo enviado con exito"
  })
})

app.use(
    session({
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
        mongoOptions: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        ttl: 30,
      }),
      secret: "P1r4t3S3cr3t",
      resave: false,
      saveUninitialized: false,
    })
  );
  
  initializePassport();
  app.use(passport.initialize());
  app.use(passport.session());
  
  const environment = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Base de datos conectada");
    } catch (error) {
      console.log(error);
    }
  };
  
environment();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/products/", productsRouter);
app.use("/api/carts/", cartRouter);
app.use("/api/cart/", cartProductRouter);
app.use("/api/users", usersRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/forgot", forgotRouter);
app.use("/api/sessions/", sessionRouter);
app.use("/api/mockingProducts", mockingProducts);

const server = app.listen(PORT, () => {
    console.log(`servidor iniciado en puerto ${PORT}!`);
  });
  
  server.on("error", (err) => {
    console.error(err);
  });
