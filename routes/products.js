import express from 'express'
import db from '../db.js'
import client from '../redis.js'

const router = express.Router()

router.get('/', async (req, res) => {
    let start = process.hrtime()
    try {
        const products = await db.any('SELECT * from products')
        let stop = process.hrtime(start)
        res.json({
            data: products,
            time: `${stop[0]} seconds and ${stop[1] / 1000000} milliseconds`
        })
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {

    const product_id = req.params.id
    let start = process.hrtime()
    let message = ''

    // Check if product is in Redis
    let product = await client.get(product_id)
    if (product === null) {
        // Product is not in Redis; add it
        console.log('Product is NOT in Redis')
        try {
            product = await db.one('SELECT * from products WHERE "id" = $1', [product_id])
            client.set(product_id, JSON.stringify(product))
        }
        catch (err) {
            if (err.message === 'No data returned from the query.') {
                product = {}
            }

            message = err.message
        }
        finally {
            let stop = process.hrtime(start)
            res.json({
                data: product,
                time: `${stop[0]} seconds and ${stop[1] / 1000000} milliseconds`,
                message: message
            })
        }
    } else {
        // Products is in Redis; return it
        console.log('Product is in Redis')
        let stop = process.hrtime(start)
        res.json({
            data: JSON.parse(product),
            time: `${stop[0]} seconds and ${stop[1] / 1000000} milliseconds`
        })

    }
})

export default router