import { text, sqliteTable } from 'drizzle-orm/sqlite-core'
import crypto from "crypto"

export const users = sqliteTable("users", {
    id: text('id').primaryKey().$default(() => crypto.randomUUID()),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
})