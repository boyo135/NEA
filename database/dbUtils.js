// #region Imports
import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { tables } from './drizzle/schemas/schemaUtils.js'
// #endregion


// #region Utils
const createDb = (path = 'database/.db') => {
    return new Database(path)
}


const createDbClient = (db = null) => {
    return drizzle(
        db ? db : createDb(),
        {
            schema: { ...tables }
        }
    )
}
// #endregion



// #region Exports
const dbClient = createDbClient()

const dbUtils = {
    createDb,
    createDbClient,
    dbClient,
    tables
}

export default dbUtils

export { createDb, createDbClient, dbClient, tables }
// #endregion