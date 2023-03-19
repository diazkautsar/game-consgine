const { getPokemons: getAllPokemons } = require('../models');
const ResponseEntity = require('../entities/responseEntity');


module.exports = {
    getPokemons: async (req, res, next) => {
        try {
            const responseEntity = new ResponseEntity()
            const pokemons = await getAllPokemons(req);

            responseEntity.success = true
            responseEntity.data = pokemons
            responseEntity.message = 'Success Get Pokemons'

            res.status(200).send(responseEntity.toResponse())
        } catch (error) {
            res.status(500).send({
                message: 'Internval Server Error'
            })
        }
    }
}