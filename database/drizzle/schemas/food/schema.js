import { int, real, text, sqliteTable } from 'drizzle-orm/sqlite-core'

export const food = sqliteTable("food", {
    id: int('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    energy_kcal: real('energy_kcal'),
    protein_g: real('protein_g'),
    fibre_g: real('fibre_g'),
    fat_g: real('fat_g'),
    salt_g: real('salt_g'),
    sugar_g: real('sugars_g'),
})