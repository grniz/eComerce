import EErros from "../../service/errors/enum.js";

export default (error, req, res, next) =>{
    console.log(error.cause);
    switch(error.code){
        case INVALID_TYPES_ERROR:
            res.send({
                status:"error",
                error: error.name,
            });
            break;
            default:
                res.send({
                    status:"error",
                    error:"unhandled error",
                });
                break;
    }
};