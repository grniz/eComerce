import winston from "winston";
import config from "../config/config.js";

const loginConfig = {
    development:[
        new winston.transports.Console({
            level: "debug",
        }),
        new winston.transports.File({
            filename: "./logs.log",
            level: "info",
        }),
    ],
    production:[
        new winston.transports.Console({
            level: "error",
        }),
        new winston.transports.File({
            filename: "./logs.log",
            level: "warn",
        }),
    ],
};

const addLogger = (req,res,next) => {
    req.logger = winston.createLogger({
        transports: loginConfig[config.app.ENV],
    });
    req.logger.http(`${req.method} ${req.url}- ${new Date().toLocaleTimeString()}`);
    next();
};

export default addLogger;