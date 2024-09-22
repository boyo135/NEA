//region imports
import dbOps from '../../../../database/dbOps.js'
//endregion



const getFormInputs = async (request) => {
    return Object.fromEntries(await request.formData())
}



// #region Actions
/** @type {import('./types').Action} */
export const actions = {
    // #region Login
    login: async ({ request, cookies }) => {
        const formInputs = await getFormInputs(request)

        const result = await dbOps.getUser({
            username: formInputs.username,
            password: formInputs.password
        })

        if (!result.success) {
            return {
                status: 400,
                error: "Could not get user entry"
            }
        }

        cookies.set('userId', result.user.id, {
            path: '/',
            maxAge: 1000000000,
            httpOnly: true,
            sameSite: 'strict',
            secure: false
        })

        return {
            status: 200,
            data: {
                message: "login action ran"
            }
        }
    },

    
    // #endregion

    // #region Register
    register: async ({ request, cookies }) => {
        const formInputs = await getFormInputs(request)

        if (formInputs.confirmPassword !== formInputs.password) return {
            status: 400,
            error: "Passwords do not match"
        }

        const result = await dbOps.createUser({
            username: formInputs.username,
            email: formInputs.email,
            password: formInputs.password
        })

        if (!result.success) {
            return {
                status: 400,
                error: "Could not create user entry"
            }
        }

        cookies.set('userId', result.user.id, {
            path: '/',
            maxAge: 1000000000,
            httpOnly: true,
            sameSite: 'strict',
            secure: false
        })

        return {
            status: 200,
            data: {
                message: "register action ran"
            }
        }
    }
    // #endregion
}
// #endregion