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
        return {
            status: 200,
            data: {
                message: "login action ran",
                formInputs: await getFormInputs(request)
            }
        }
    }
    // #endregion
}
// #endregion