export default class CostumError {
    static createError({ name = "userError", cause, message, code = 1 }) {
        const error = new Error(message);
        error.name = name;
        error.code = code;
        throw error;
    }
}
