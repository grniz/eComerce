import winston from "winston";

const logger = winston.createLogger({
    transports: [
        new winston.transport.Console({
            level: "http"
        }),
        new winston.transport.File({
            filename: "./errors.log",
            level: "Warn",

        }),
    ],
});

const prodLogger = winston.createLogger({
    transports: [
        new winston.transport.Console({
            level: "http"
        }),
        new winston.transport.File({
            filename: "./errors.log",
            level: "Warn",

        }),
    ],
});

const devLogger = winston.createLogger({
    transports: [
        new winston.transport.Console({
            level: "verbose"
        }),
    ],
});

export const addLogger = (req, res, next) => {
    req.logger = process.env.ENVIROMENT === "production" ? prodLogger : devLogger;
    
    let bodyData = req.body;
        if (req.method === "POST" || req.method === "PUT"){
            bodyData = JSON.stringify(bodyData);
        } else{
            bodyData = "";
        }
    
    req.logger.http(`Ruta:${req.method} ${req.url} - ${new Date().toLocaleTimeString()} - Data:${bodyData}`);
    next();
}