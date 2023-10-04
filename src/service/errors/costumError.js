export default class costumError{
    static createError({name = "userError", cause, message, code = 1 }){
        const error = new Error(message, {cause});
        error.name = name;
        error.code = code;
        throw error;
    }
}