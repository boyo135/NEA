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
    if (db) return drizzle(db)

    return drizzle(createDb())
}
// #endregion



// #region Exports
const db = createDbClient()

const dbUtils = {
    createDb,
    createDbClient,
    db,
    tables
}

export default dbUtils

export { createDb, createDbClient, db, tables }
// #endregion