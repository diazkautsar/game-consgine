const ResponseEntity = require('../entities/responseEntity')

module.exports = async (req, res, next) => {
    const response = new ResponseEntity()
    const statusCode = 401

    response.success = false
    response.statusCode = statusCode
    response.messageTitle = 'Unauthorized'
    response.message = 'Invalid API KEY'
    
    const apikey = req.headers.apikey

    if (!apikey || (apikey && apikey !== process.env.APP_API_KEY)) {
        return res.status(statusCode).send(response.toResponse())
    }

    next()
}