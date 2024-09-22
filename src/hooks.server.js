import dbOps from '../database/dbOps.js'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.user = null


    const userId = event.cookies.get('userId')

    const result = await dbOps.getUser({
        id: userId
    })

    if (!result.success) {
        return await resolve(event)
    }

    const user = result.user


    event.locals.user = user

	return await resolve(event)
}