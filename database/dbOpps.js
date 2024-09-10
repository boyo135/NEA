// #region Imports
import { dbClient, tables } from './dbUtils.js'
// #endregion



// #region Operations
const createUser = async (fieldValues) => {
    const matchingUsers = await dbClient.query.user.findMany({
        where: (user, { or, eq }) => or(
            eq(user.username, fieldValues.username),
            eq(user.email, fieldValues.email)
        )
    })

    const matchingFields = []
    for (const match of matchingUsers) {
        if (match.username === fieldValues.username) {
            matchingFields.push('username')
        }
        if (match.email === fieldValues.email) {
            matchingFields.push('email')
        }
    }
    if (matchingFields) return {
        error: 'Unique constraint failed',
        fields: matchingFields
    }

    await dbClient.insert(tables.user).values(fieldValues)
    return {
        success: true
    }
}
// #endregion