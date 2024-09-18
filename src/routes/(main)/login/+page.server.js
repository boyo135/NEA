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
    login: async ({ request }) => {
        return {
            status: 200,
            data: {
                message: "login action ran",
                formInputs: await getFormInputs(request)
            }
        }
    },
    // #endregion

    // #region Register
    register: async ({ request }) => {
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

        if (result.error) {
            return {
                status: 400,
                error: "Could not create user entry"
            }
        }

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