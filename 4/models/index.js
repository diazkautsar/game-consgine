const axios = require('../libs/axios');
const paginate = require('../helper/paginate');

module.exports = {
    getPokemons: async (req) => {
        try {
            let { page, limit, search, order = 'desc', order_by } = req.query 
            
            if (!page) {
                page = 1
            }

            if (!limit) {
                limit = 20
            }

            const { data } = await axios({
                method: 'get',
                url: '/pokemon?limit=200',
            })

            let models = {
                rows: [],
                count: 0
            }

            for (let i = 0; i < data.results.length; i++) {
                const pokemon = data.results[i]
                const { data: response } = await axios.get(pokemon.url)

                models.rows.push(response)
                models.count += 1
            }

            if (search) {
                const resultSearch = models.rows.filter(item => item.name.includes(search))

                models.rows = resultSearch
                models.count = resultSearch.length
            }

            if (order_by && ['height', 'weight', 'base_experience'].includes(order_by)) {
                switch (order_by) {
                    case "height":
                        models.rows = models.rows.sort((a, b) => {
                            if (order && order.toLowerCase() === 'asc') {
                                return a.weight - b.weight
                            }
        
                            return b.height - a.height
                        })
                        break;

                    case "weight":
                        models.rows = models.rows.sort((a, b) => {
                            if (order && order.toLowerCase() === 'asc') {
                                return a.weight - b.weight
                            }
        
                            return b.weight - a.weight
                        })
                        break;

                    case "base_experience":
                        models.rows = models.rows.sort((a, b) => {
                            if (order && order.toLowerCase() === 'asc') {
                                return a.base_experience - b.base_experience
                            }
        
                            return b.base_experience - a.base_experience
                        })
                        break;
                
                    default:
                        models.rows = models.rows.sort((a, b) => {
                            if (order && order.toLowerCase() === 'asc') {
                                return a.id - b.id
                            }
        
                            return b.id - a.id
                        })
                }
            } else {
                models.rows = models.rows.sort((a, b) => {
                    if (order && order.toLowerCase() === 'asc') {
                        return a.id - b.id
                    }

                    return b.id - a.id
                })
            }

            models.rows = models.rows.slice((page - 1) * limit, page * limit);

            const result = await paginate(models, page, limit)

            return result
        } catch (error) {
            console.log(error)
            throw error
        }
    },
}