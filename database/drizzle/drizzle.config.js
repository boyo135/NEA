export default {
    dialect: 'sqlite',
    dbCredentials: {
        url: 'database/.db',
    },
    schema: 'database/drizzle/schemas/**/schema.js',
    out: 'database/drizzle/out',
    migrations: {
        prefix: 'timestamp',
    }
}