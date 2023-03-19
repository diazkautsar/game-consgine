const express = require('express');
const { getPokemons } = require('../controller');

const middlewares = require('../middlewares');


const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('HELLO FROM GAME CONSIGNE')
})

router.get('/pokemons', middlewares, async (req, res, next) => {
    await getPokemons(req, res, next)
})

module.exports = router
