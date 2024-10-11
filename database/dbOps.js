// #region Imports
import { dbClient, tables } from './dbUtils.js'
// #endregion



// #region Operations
const createUser = async (fieldValues) => {
    // search the every entry in the database
    const matchingUsers = await dbClient.query.user.findMany({
        //check if username OR email matches
        where: (user, { or, eq }) => or(
            eq(user.username, fieldValues.username),
            eq(user.email, fieldValues.email)
        )
    })

    const matchingFields = []
    for (const match of matchingUsers) {
        // check if the username in the database matches the username inputted on the form
        if (match.username === fieldValues.username) {
            // if it does, 'push' the username into the matching fields array
            matchingFields.push('username')
        }
        // check if the email in the database matches the username inputted on the form
        if (match.email === fieldValues.email) {
            // if it does, 'push' the email into the matching fields array
            matchingFields.push('email')
        }
    }
    // check if there is anything in the matching fields array
    if (matchingFields.length > 0) return {
        // if there is, return the error and the fields that don't match
        error: 'Unique constraint failed',
        fields: matchingFields
    }
    // if there are no matching fields add the user to the database
    const user = (await dbClient.insert(tables.user).values(fieldValues).returning())[0]
    // return the user and the fact that they have been added is a success 
    return {
        user: user,
        success: true
    }
}


const getUser = async (fieldFilters) => {
    /*
        fieldFilters = {
            id?: String,
            username?: String,
            etc...
        }
    */
     // find the first user
    const user = await dbClient.query.user.findFirst({
        where: (user, { and, eq }) => and(
            // where the field filters match
            ...Object.entries(fieldFilters).map(([key, value]) => {
                return eq(user[key], value)
            })

            /*
                eq(user.id, fieldFilters.id),
                eq(user.username, fieldFilters.username),
                etc...
            */
        )
    })

    return {
        user: user,
        success: Boolean(user)
    }
}

// #endregion



// #region exports
const dbOps = {
    createUser,
    getUser
}

export default dbOps

// #endregion