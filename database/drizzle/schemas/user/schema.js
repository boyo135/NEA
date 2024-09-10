import { text, sqliteTable } from 'drizzle-orm/sqlite-core'
import crypto from "crypto"

export const user = sqliteTable("user", {
    id: text('id').primaryKey().$default(() => crypto.randomUUID()),
    username: text('username').notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
})