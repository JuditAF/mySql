
function errorHAndling (err, req, res, next) {

    res.status(500).json({message: err.message});  // ERROR DEL SERVIDOR

}

module.exports = errorHAndling;