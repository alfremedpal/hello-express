import { createClient } from 'redis'

const client = createClient({
    url: process.env.REDIS_STRING
})

await client.connect()

export default client