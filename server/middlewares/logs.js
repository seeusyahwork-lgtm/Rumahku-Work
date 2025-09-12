// middlewares/logs.js

// const logReqest = (req, res, next) => {
//         console.log("Terjadi request ke PATH :", req.path);
//         next();
//     };
    
//     module.exports = logReqest;

const logReqest = (req, res, next) => {
    console.log("Terjadi request ke PATH :", req.path);
    next();
};

export default logReqest;

