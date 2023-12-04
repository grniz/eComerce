/*
import winston from "winston";

const consoleTransport = new winston.transports.Console({
    level: "http"
});

const fileTransport = new winston.transports.File({
    filename: "./errors.log",
    level: "warn",
});

const prodLogger = winston.createLogger({
    transports: [consoleTransport, fileTransport],
});

const devLogger = winston.createLogger({
    transports: [consoleTransport],
});

export const addLogger = (req, res, next) => {
    req.logger = process.env.ENVIRONMENT === "production" ? prodLogger : devLogger;

    let bodyData = req.body;
    if (req.method === "POST" || req.method === "PUT") {
        bodyData = JSON.stringify(bodyData);
    } else {
        bodyData = "";
    }

    req.logger.http(`Ruta: ${req.method} ${req.url} - ${new Date().toLocaleTimeString()} - Data: ${bodyData}`);
    next();
};
*/