const logReqest = (req, res, next) => {
        console.log("Terjadi request ke PATH :", req.path);
        next();
    };
    
    module.exports = logReqest;
