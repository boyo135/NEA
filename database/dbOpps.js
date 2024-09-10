import { dbClient, tables } from './dbUtils.js'

await dbClient.delete(tables.user)
await dbClient.insert(tables.user).values(
    [
        {
            username: 'Bailey',
            email: 'bailey@email.com',
            password: 'BaileyTheBoss'
        },
        {
            username: "Fawzia",
            email: "fawzia@email.com",
            password: "FawPow"
        }
    ]
)
const result = await dbClient.query.user.findMany()

console.log(result)